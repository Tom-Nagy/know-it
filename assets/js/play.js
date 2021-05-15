// ------------------------------------------------------------------ Display of the rules
// Build following the tutorial video on Youtube made [by Web Dev Simplified](https://www.youtube.com/watch?v=MBaw_6cPmAw).
// start credit

let openModalButtons = document.querySelectorAll("[data-modal-target]");
let closeModalButtons = document.querySelectorAll("[data-close-modal]");
let overlay = document.getElementsByClassName("overlay")[0];

// Add event listener to the buttons (there is only one here) that open the modal and call the function to open it.
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

// Add event listener to the overlay in order to close the modal.

overlay.addEventListener("click", () => {
  let modals = document.querySelectorAll(".modal.modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

// Add event listener to the buttons that close the modal and call the function to close it.
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let modal = button.closest(".modal");
    closeModal(modal);
  });
});

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

// Get the the subject selected.
let subjectButtons = document.querySelectorAll("[data-subject-button]");

subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let subject = button.id;
    if (subject === "volcano") {
      setSubject(subject);
    } else if (subject === "jungle") {
      setSubject(subject);
    } else if (subject === "ocean") {
      setSubject(subject);
    } else if (subject === "earth") {
      setSubject(subject);
    }
  });
});

// Set the selected subject so it is visually identifiable.
function setSubject(subject) {
  let selectedSubject = document.getElementById(subject);
  selectedSubject.classList.add("selected-subject");

  let otherSubjects = document.getElementsByClassName("subjects-buttons");
  for (let subjects of otherSubjects) {
    if (
      subjects.classList.contains("selected-subject") &&
      subjects.id !== subject
    ) {
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

let levelList = document.querySelectorAll("[data-level]");

levelList.forEach((level) => {
  level.addEventListener("click", () => {
    let getLevel = level.innerText;
    setLevel(getLevel);
    toggleLevels();
  });
});

function setLevel(getLevel) {
  document.getElementById("button-display").innerText = getLevel;
  let level = document.getElementById("button-display").innerText;
}

// Dislpay game achievements.
let rewardsDisplay = document.getElementById("rewards-display");
let flagReward = `<i class="fas fa-flag-checkered"></i>`;
let infinityReward = `<i class="fas fa-infinity"></i>`;
let graduationReward = `<i class="fas fa-graduation-cap"></i>`;
let universityReward = `<i class="fas fa-university"></i>`;
let atomReward = `<i class="fas fa-atom"></i>`;
let flaskReward = `<i class="fas fa-flask"></i>`;
let brainReward = `<i class="fas fa-brain"></i>`;
let robotReward = `<i class="fas fa-robot"></i>`;
let trophyReward = `<i class="fas fa-trophy"></i>`;
let hatReward = `<i class="fas fa-hat-wizard"></i>`;
let gamepadReward = `<i class="fas fa-gamepad"></i>`;
let astronautReward = `<i class="fas fa-user-astronaut"></i>`;

if (Number(localStorage.flag) === 1) {
  rewardsDisplay.appendChild(flagReward);
}

if (Number(localStorage.infinity) === 1) {
  rewardsDisplay.appendChild(infinityReward);
}

if (Number(localStorage.graduation) === 1) {
  rewardsDisplay.appendChild(graduationReward);
}

if (Number(localStorage.university) === 1) {
  rewardsDisplay.appendChild(universityReward);
}

if (Number(localStorage.atom) === 1) {
  rewardsDisplay.appendChild(atomReward);
}

if (Number(localStorage.flask) === 1) {
  rewardsDisplay.appendChild(flaskReward);
}

if (Number(localStorage.brain) === 1) {
  rewardsDisplay.appendChild(brainReward);
}

if (Number(localStorage.robot) === 1) {
  rewardsDisplay.appendChild(robotReward);
}

if (Number(localStorage.trophy) === 1) {
  rewardsDisplay.appendChild(trophyReward);
}

if (Number(localStorage.hat) === 1) {
  rewardsDisplay.appendChild(hatReward);
}

if (Number(localStorage.gamepad) === 1) {
  rewardsDisplay.appendChild(gamepadReward);
}

if (Number(localStorage.astronaut) === 1) {
  rewardsDisplay.appendChild(astronautReward);
}

// ------------------------------------------------------------------ Game

let startButton = document.getElementById("start-button");
let gameOverlay = document.getElementsByClassName("game-overlay")[0];

function setGameParameters() {
  let avatar = document.getElementById("player");
  let avatarPosition = avatar.className.substring(7);
  avatar.classList.remove(avatarPosition);
  avatar.classList.add("twenty-two");

  // Set the localStorage items for the game data to zero
  // Score
  if (localStorage.score) {
    localStorage.score = 0;
  } else {
    localStorage.score = 0;
  }

  //strike
  if (localStorage.strike) {
    localStorage.strike = 0;
  } else {
    localStorage.strike = 0;
  }

  // Check if any strikes are displayed and if so hide them.
  let strikeOne = document.querySelector(".strike-one i");
  let strikeTwo = document.querySelector(".strike-two i");

  if (
    strikeOne.classList.contains("hide") === false &&
    strikeTwo.classList.contains("hide") === false
  ) {
    strikeOne.classList.add("hide");
    strikeTwo.classList.add("hide");
  } else if (strikeOne.classList.contains("hide") === false) {
    strikeOne.classList.add("hide");
  }
}
startButton.addEventListener("click", function () {
  setGameParameters();

  // Get the game settings.
  let level = document.getElementById("button-display").innerText;
  let subject = document.getElementsByClassName("selected-subject")[0];

  if (level === "Apprentice" && typeof subject !== "undefined") {
    displayEasyGame(level, subject);
  } else if (level === "Set Level" || typeof subject === "undefined") {
    alert(
      `Oops, it didn't work!!
      PLease make sure you selected a SUBJECT and set the LEVEL ;)`
    );
  }
});

// ----------------- Display the game

// Easy game.
function displayEasyGame(level, subject) {
  // Display the game settings on the game interface.
  let subjectId = subject.id;
  document.querySelector("[data-game-level]").innerText = level;
  document.querySelector("[data-game-subject]").innerText = subjectId;

  // Display the easy grid (gameplay).
  let easyGame = document.getElementById("easy-game");
  easyGame.classList.add("modal-active");
  gameOverlay.classList.add("overlay-active");

  // set the labyrinth theme depending on the subject.
  if (subjectId === "volcano") {
    setPath(subjectId);
  } else if (subjectId === "jungle") {
    setPath(subjectId);
  } else if (subjectId === "ocean") {
    setPath(subjectId);
  } else if (subjectId === "earth") {
    setPath(subjectId);
  }

  //let selectedSubject = document.querySelector("[data-game-subject]").innerText  The question will be selected depending on selectedSubject
}

// Set the labyrinth theme.
function setPath(subjectId) {
  let easyGame = document.getElementById("easy-game");
  let differentPaths = easyGame.querySelectorAll("img");

  differentPaths.forEach((path) => {
    if (path.classList.contains(subjectId)) {
      path.classList.remove("hide");
    } else if (
      path.classList.contains(subjectId) === false &&
      path.classList.contains("hide") === false &&
      path.classList.contains("exit-sign") === false
    ) {
      path.classList.add("hide");
    }
  });
}

// --------------- Close (Exit) the Game
let closeGameButton = document.querySelector("[data-exit-game]");

closeGameButton.addEventListener("click", function () {
  closeGame();
});

function closeGame() {
  let openGame = document.querySelector(closeGameButton.dataset.exitGame);
  openGame.classList.remove("modal-active");
  gameOverlay.classList.remove("overlay-active");
}

// Move the Avatar (player)

let controlButtons = document.querySelectorAll("[data-button-direction]");

for (let button of controlButtons) {
  button.addEventListener("click", function () {
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
  });
}

function getNewPosition(availableDirections, chosenDirection) {
  // Create an object of array containing the available direction to be able to iterate on.
  let directions = availableDirections.split(" ");

  // Get the string that correspond to the direction chosen in order to extract the new position from it.
  for (let direction of directions) {
    if (direction.includes(chosenDirection)) {
      // Credit for the line 194 to [stack overflow](https://stackoverflow.com/questions/29650867/remove-part-of-string-in-javascript).
      // Extract the new position and move the avatar.
      let newPosition = direction.substring(direction.indexOf("-") + 1);
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

  // Check if the the grid area (case) has a question.
  checkForQuestion();
  checkForExit();
}

function checkForQuestion() {
  // Get the position of the avatar and the extract the grid area.
  let avatar = document.getElementById("player");
  let avatarPosition = avatar.className.substring(7);

  // Get the positions of the questions.
  let grid = document.getElementsByClassName("grid-easy")[0];
  let questionCases = grid.querySelectorAll(".question");

  // Check if the avatar is on a question case.
  questionCases.forEach((question) => {
    if (question.classList.contains(avatarPosition)) {
      displayQuestion();
    }
  });
}

// Display the question.
function displayQuestion() {
  // Display the modal.
  let questionModal = document.getElementsByClassName("question-modal")[0];
  let questionOverlay = document.getElementsByClassName("question-overlay")[0];

  questionModal.classList.add("modal-active");
  questionOverlay.classList.add("overlay-active");

  let level = document.getElementById("button-display").innerText;
  let subject = document.getElementsByClassName("selected-subject")[0];

  // Populate the question modal depending on the level and the subject selected.
  if (level === "Apprentice" && subject.id === "volcano") {
    populateVolcanoEasyQuestion();
  } /*else if (level === "Scientist" && subject.id === "volcano") {
    populateVolcanoInterQuestion()
  } else if (level === "Genius" && subject.id === "volcano") {
    populateVolcanoHardQuestion()
  } else if (level === "Apprentice" && subject.id === "jungle") {
    populateJungleHardQuestion()
  } else if (level === "Scientist" && subject.id === "jungle") {
    populateJungleHardQuestion()
  } else if (level === "Genius" && subject.id === "jungle") {
    populateJungleHardQuestion()
  } else if (level === "Apprentice" && subject.id === "ocean") {
    populateOceanHardQuestion()
  } else if (level === "Scientist" && subject.id === "ocean") {
    populateOceanHardQuestion()
  } else if (level === "Genius" && subject.id === "ocean") {
    populateOceanHardQuestion()
  } else if (level === "Apprentice" && subject.id === "earth") {
    populateEarthHardQuestion()
  } else if (level === "Scientist" && subject.id === "earth") {
    populateEarthHardQuestion()
  } else if (level === "Genius" && subject.id === "earth") {
    populateEarthHardQuestion()
  }
  */
}

function populateVolcanoEasyQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/volcano-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoEasyQuestions = data;
      console.log(volcanoEasyQuestions);

      // select a random question
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)
      //For the explanation on how to generate a random number and for that number not to appear twice.
      let questionNumbers = [];
      for (let i = 0; i < volcanoEasyQuestions.length; i++) {
        /// TO BE CHECK BECAUSE DOESNT WORK
        questionNumbers.push(i);
      }
      console.log(questionNumbers);
      let randomQuestionIndex = questionNumbers.splice(
        Math.random() * questionNumbers.length,
        1
      )[0];
      console.log(randomQuestionIndex);
      let randomQuestion = volcanoEasyQuestions[randomQuestionIndex];

      let questionDisplay = document.getElementById("question-display");
      questionDisplay.innerText = randomQuestion.question;

      let firstOption = document.querySelectorAll("[for='answer-one']")[0];
      firstOption.innerText = randomQuestion.optionOne;

      let secondOption = document.querySelectorAll("[for='answer-two']")[0];
      secondOption.innerText = randomQuestion.optionTwo;

      let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
      thirdOption.innerText = randomQuestion.optionThree;
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkVolcanoEasyAnswer();
    },
    { once: true }
  );
}

// Check the answer.
function checkVolcanoEasyAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/volcano-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoEasyQuestions = data;
      for (let questions of volcanoEasyQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                alert("That's right! Well done :)");
                closeQuestion();
                incrementScrore();
              } else {
                alert(
                  `Sorry, wrong answer! 
                  The correct answer was:  ${questions.correctAnswer}
                 `
                );
                decrementScore();
                addStrike();
                closeQuestion();
              }
            }
          });
        }
      }
    });
}

// Close the question modal.
function closeQuestion() {
  let questionModal = document.getElementsByClassName("question-modal")[0];
  let questionOverlay = document.getElementsByClassName("question-overlay")[0];

  questionModal.classList.remove("modal-active");
  questionOverlay.classList.remove("overlay-active");
}

// Set the localStorage item to store the score and/or increment the score.
function incrementScrore() {
  if (localStorage.score) {
    localStorage.score = Number(localStorage.score) + 1;
  } else {
    localStorage.score = 1;
  }
}

// Set the localStorage item to store the score and/or decrement the score.
function decrementScore() {
  if (localStorage.score) {
    localStorage.score = Number(localStorage.score) - 1;
  } else {
    localStorage.score = -1;
  }
}

// Set the localStorage item to store the strikes ( = wrong answer)  and/or increment it.
function addStrike() {
  if (localStorage.strike) {
    localStorage.strike = Number(localStorage.strike) + 1;
  } else {
    localStorage.strike = 1;
  }

  displayStrikes();

  // Check if the Strikes have reached the limit for the selected level and call gameOver if it has.
  let level = document.getElementById("button-display").innerText;
  if (level === "Apprentice" && Number(localStorage.strike) === 3) {
    gameOver();
  } else if (level === "Scientist" && Number(localStorage.strike) === 2) {
    gameOver();
  } else if (level === "Genius" && Number(localStorage.strike) === 1) {
    gameOver();
  }
}

// Strike display.
function displayStrikes() {
  if (Number(localStorage.strike) === 1) {
    let strikeOne = document.querySelector(".strike-one i");
    strikeOne.classList.remove("hide");
  } else if (Number(localStorage.strike) === 2) {
    let strikeTwo = document.querySelector(".strike-two i");
    strikeTwo.classList.remove("hide");
  }
}

function gameOver() {
  alert(
    "Sorry you have reached the strike(s) limit.... GAME OVER! Try again ;)"
  );
  closeQuestion();
  closeGame();
}

// Finish the Game

// Get the exit and avatar position and check if they are on the same grid.
// If the player reach the exit, display the final score and atrribute achievement
// depending on the final score.

function checkForExit() {
  let exit = document
    .querySelector(".grid-easy .labyrinth-exit")
    .className.substring(15);

  let avatar = document.getElementById("player");
  let avatarPosition = avatar.className.substring(7);

  if (avatarPosition === exit) {
    displayResults();
  }
}

// Display the results upon finishing the game.
function displayResults() {
  let level = document.getElementById("button-display").innerText;
  let subject = document.getElementsByClassName("selected-subject")[0];
  let resultsModal = document.getElementsByClassName("results-modal")[0];
  let resulstOverlay = document.getElementsByClassName("results-overlay")[0];
  let finalScore = Number(localStorage.score);
  let numberOfStrikes = Number(localStorage.strike);
  let displayScore = document.getElementById("score");
  let displayAchievements = document.getElementById("achievements");

  resultsModal.classList.add("modal-active");
  resulstOverlay.classList.add("overlay-active");
  displayScore.innerText = finalScore;

  // Display rewards depending on level, subjects and if no strikes has been received
  // and save them with localStorage.
  if (
    level === "Apprentice" &&
    subject === "volcano" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-flag-checkered"></i>
    `;

    localStorage.flag = 1;

  } else if (
    level === "Apprentice" &&
    subject === "jungle" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-infinity"></i>
    `;

    localStorage.infinity = 1;

  } else if (
    level === "Apprentice" &&
    subject === "ocean" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-graduation-cap"></i>
    `;

    localStorage.graduation = 1;

  } else if (
    level === "Apprentice" &&
    subject === "earth" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p> 
    <i class="fas fa-university"></i>
    `;

    localStorage.university = 1; 
    
  } else if (
    level === "Scientist" &&
    subject === "volcano" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-atom"></i>
    `;

    localStorage.atom = 1;

  } else if (
    level === "Scientist" &&
    subject === "jungle" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-flask"></i>
    `;

    localStorage.flask = 1;

  } else if (
    level === "Scientist" &&
    subject === "ocean" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-brain"></i>
    `;

    localStorage.brain = 1;
    
  } else if (
    level === "Scientist" &&
    subject === "earth" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-robot"></i>
    `;

    localStorage.robot = 1;
    
  } else if (
    level === "Genius" &&
    subject === "volcano" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-trophy"></i>
    `;

    localStorage.trophy = 1;

  } else if (
    level === "Genius" &&
    subject === "jungle" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-hat-wizard"></i>
    `;

    localStorage.hat = 1;

  } else if (
    level === "Genius" &&
    subject === "ocean" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-gamepad"></i>
    `;

    localStorage.gamepad = 1;
    
  } else if (
    level === "Genius" &&
    subject === "earth" &&
    numberOfStrikes === 0
  ) {
    displayAchievements.innerHTML = `
    <p>Congratulation you received a <strong>reward</strong>!</p>
    <i class="fas fa-user-astronaut"></i>
    `;

    localStorage.astronaut = 1;
  }

  let closeResultsButton = document.querySelector(".results-modal .close-modal");
  closeResultsButton.addEventListener("click", function() {
    resultsModal.classList.remove("modal-active");
    resulstOverlay.classList.remove("overlay-active");
    closeGame();
  })
}


