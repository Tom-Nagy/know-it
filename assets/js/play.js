// ------------------------------------------------------------------ Display of the rules
// Build following the tutorial video on Youtube made [by Web Dev Simplified](https://www.youtube.com/watch?v=MBaw_6cPmAw).
// start credit

let openModalButtons = document.querySelectorAll("[data-modal-target]");
let closeModalButtons = document.querySelectorAll("[data-close-modal]");
let overlay = document.getElementsByClassName("overlay")[0];

// Add event listener to the buttons (there is only one here) that open the modal and call the function to open it.
openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        let modal = document.querySelector(button.dataset.modalTarget); 
        openModal(modal);
    })
})

// Add event listener to the overlay in order to close the modal.

overlay.addEventListener("click", () => {
    let modals = document.querySelectorAll(".modal.modal-active");
    modals.forEach(modal => {
        closeModal(modal);
    })
})


// Add event listener to the buttons that close the modal and call the function to close it.
closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        let modal = button.closest(".modal")
        closeModal(modal);
    })
})

// Open modal
function openModal(modal) {
    if (modal === null) return;
    modal.classList.add("modal-active");
    overlay.classList.add("overlay-active");
}

// Close modal
function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");
}
// End credit

// ------------------------------------------------------------------ Select the subject

let subjectButtons = document.querySelectorAll("[data-subject-button]");

subjectButtons.forEach(button => {
    button.addEventListener("click", () => {
        let subject = button.id;
        console.log(subject);
        if (subject === "volcano") {
            setSubject(subject);
        } else if (subject === "jungle"){
            setSubject(subject);
        } else if (subject === "ocean"){
            setSubject(subject);
        } else if (subject === "earth"){
            setSubject(subject);
        }
    })
})

function setSubject (subject) {
    let selectedSubject = document.getElementById(subject);
    selectedSubject.classList.add("selected-subject");

    let otherSubjects = document.getElementsByClassName("subjects-buttons");
    for ( let subjects of otherSubjects) {
        if (subjects.classList.contains("selected-subject") && subjects.id !== subject) {
            subjects.classList.remove("selected-subject");
        }
    }

}

// ---------------------------- Toggle the level list
// Add event listener to the levels button 
$("#levels-button").click(toggleLevels);

//Toggle the levels list
function toggleLevels() {
    let levelsList = $(".levels-list");
    levelsList.toggle(300);
}

// -------------------------- select the level and display it in the button.

let  levelList = document.querySelectorAll("[data-level]");

levelList.forEach(level => {
    level.addEventListener("click", () => {
        let getLevel = level.innerText
        setLevel(getLevel);
        toggleLevels();
    })
})

function setLevel(getLevel) {
    document.getElementById("button-display").innerText = getLevel;
    let level = document.getElementById("button-display").innerText;
}

// ------------------------------------------------------------------ Game 

// Display (start) the Game
 let startButton = document.getElementById("start-button");
 let gameOverlay = document.getElementsByClassName("game-overlay")[0];

 startButton.addEventListener("click", function() {
    let level = document.getElementById("button-display").innerText;
    let subject = document.getElementsByClassName("selected-subject")[0];

     if (level === "Apprentice" && typeof(subject) !== "undefined") {
         displayEasyGame(level, subject);
     } else if ( level === "Set Level" || typeof(subject) === "undefined"){
         alert(
             `Oops, it didn't work!!
             PLease make sure you selected a SUBJECT and set the LEVEL ;)
             `);
     }
 });

function displayEasyGame(level, subject) {
    let easyGame = document.getElementById("easy-game");
    easyGame.classList.add("modal-active");
    gameOverlay.classList.add("overlay-active");

    document.querySelector("[data-game-level]").innerText = level;

    document.querySelector("[data-game-subject]").innerText = subject.id;
    //let selectedSubject = document.querySelector("[data-game-subject]").innerText  The question will be selected depending on selectedSubject
}

// Close (Exit) the Game

let closeGameButton = document.querySelector("[data-exit-game]");

closeGameButton.addEventListener("click", function() {
    let openGame = document.querySelector(closeGameButton.dataset.exitGame);
    closeGame(openGame);    
})

function closeGame(openGame) {
    openGame.classList.remove("modal-active");
    gameOverlay.classList.remove("overlay-active");
}

// Move the Avatar (player)

let controlButtons = document.querySelectorAll("[data-button-direction]");

for (let button of controlButtons) {
    button.addEventListener("click", function() {
        // Get the direction the player chose.
        let chosenDirection = button.dataset.buttonDirection;
        console.log(chosenDirection);
        let avatar = document.getElementById("player");

        // Get the position of the player and the grid-area he is on.
        let avatarPosition = avatar.className.substring(7);
        let gridItemID = "easy-" + avatarPosition;
        console.log(gridItemID);
        let gridItem = document.getElementById(gridItemID);
        console.log(gridItem);

        // Get the available directions from this grid-area.
        let availableDirections = gridItem.dataset.easyAvailableDirection; 
        console.log(availableDirections);
        
        // Check if the direction chosen is available for the player to move onto and get the new position.
        if (availableDirections.includes(chosenDirection)) {
            getNewPosition(availableDirections, chosenDirection);
        }
    })
} 

function getNewPosition(availableDirections, chosenDirection) {
    // Create an object of array containing the available direction to be able to iterate on.
    let directions = availableDirections.split(" ");
    console.log(directions);

    // Get the string that correspond to the direction chosen in order to extract the new position from it.
    for (let direction of directions) {
        if (direction.includes(chosenDirection)) {
            // Credit for the line 194 to [stack overflow](https://stackoverflow.com/questions/29650867/remove-part-of-string-in-javascript).
            // Extract the new position.
            let newPosition =  direction.substring(direction.indexOf("-")+1);
            console.log(newPosition);
            moveAvatar(newPosition);
        }
    }
}

// Move the Avatar.
function moveAvatar(newPosition) {
    let avatar = document.getElementById("player");
    let avatarClassList = avatar.classList;
    let avatarPosition = avatar.className.substring(7);
    avatarClassList.remove(avatarPosition);
    avatarClassList.add(newPosition);
}

