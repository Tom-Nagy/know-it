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

let controlButtons = document.getElementsByClassName("control-buttons");

controlButtons.forEach(button => {
    button.addEventListener("click", function() {
        let buttonDirection = document.querySelector(button.dataset.buttonDirection);
    })
})