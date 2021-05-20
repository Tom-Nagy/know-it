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

// ------------------------------------------------------------------ Game -------------------------------------------------------

let startButton = document.getElementById("start-button");
let gameOverlay = document.getElementsByClassName("game-overlay")[0];
let questionsNumber = [];

// Get the number of question from the json file and add it to the questionsNumber array for later use.
function getVolcanoEasyQuestions() {
  fetch("assets/JSON/easy-questions/volcano-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoEasyQuestions = data;

      for (let i = 0; i < volcanoEasyQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getJungleEasyQuestions() {
  fetch("assets/JSON/easy-questions/jungle-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleEasyQuestions = data;

      for (let i = 0; i < jungleEasyQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getOceanEasyQuestions() {
  fetch("assets/JSON/easy-questions/ocean-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanEasyQuestions = data;

      for (let i = 0; i < oceanEasyQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getEarthEasyQuestions() {
  fetch("assets/JSON/easy-questions/earth-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthEasyQuestions = data;

      for (let i = 0; i < earthEasyQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getVolcanoInterQuestions() {
  fetch("assets/JSON/inter-questions/volcano-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoInterQuestions = data;

      for (let i = 0; i < volcanoInterQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getJungleInterQuestions() {
  fetch("assets/JSON/inter-questions/jungle-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleInterQuestions = data;

      for (let i = 0; i < jungleInterQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getOceanInterQuestions() {
  fetch("assets/JSON/inter-questions/ocean-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanInterQuestions = data;

      for (let i = 0; i < oceanInterQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getEarthInterQuestions() {
  fetch("assets/JSON/inter-questions/earth-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthInterQuestions = data;

      for (let i = 0; i < earthInterQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getVolcanoHardQuestions() {
  fetch("assets/JSON/hard-questions/volcano-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoHardQuestions = data;

      for (let i = 0; i < volcanoHardQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getJungleHardQuestions() {
  fetch("assets/JSON/hard-questions/jungle-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleHardQuestions = data;

      for (let i = 0; i < jungleHardQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getOceanHardQuestions() {
  fetch("assets/JSON/hard-questions/ocean-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanHardQuestions = data;

      for (let i = 0; i < oceanHardQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}

function getEarthHardQuestions() {
  fetch("assets/JSON/hard-questions/earth-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthHardQuestions = data;

      for (let i = 0; i < earthHardQuestions.length; i++) {
        questionsNumber.push(i);
      }
    });
}


function setGameParameters() {

  let level = document.getElementById("button-display").innerText;
  let subject = document.getElementsByClassName("selected-subject")[0];

  // Set the array to empty before populating it with the corresponding indexes.
  questionsNumber = [];

  // Set the avatar position and display the avatar and the exit depending on the level.
  if (level === "Apprentice") {
    let avatar = document.getElementById("easy-player");
    avatar.classList.remove("hide");
    let avatarPosition = avatar.className.substring(7);
    avatar.classList.remove(avatarPosition);
    avatar.classList.add("twenty-one");

    let exit = document.querySelector(".grid-easy .labyrinth-exit");
    exit.classList.remove("hide");

    // Hide the grids that are not being played.
    let interGrid = document.getElementById("inter-game");
    let hardGrid = document.getElementById("hard-game");
    interGrid.style.display = "none";
    hardGrid.style.display = "none";

  } else if (level === "Scientist") {
    let avatar = document.getElementById("inter-player");
    avatar.classList.remove("hide");
    let avatarPosition = avatar.className.substring(7);
    avatar.classList.remove(avatarPosition);
    avatar.classList.add("forty-nine");

    let exit = document.querySelector(".grid-inter .labyrinth-exit");
    exit.classList.remove("hide");

    // Hide the grids that are not being played.
    let easyGrid = document.getElementById("easy-game");
    let hardGrid = document.getElementById("hard-game");
    easyGrid.style.display = "none";
    hardGrid.style.display = "none";

  } else if (level === "Genius") {
    let avatar = document.getElementById("hard-player");
    avatar.classList.remove("hide");
    let avatarPosition = avatar.className.substring(7);
    avatar.classList.remove(avatarPosition);
    avatar.classList.add("twenty-two");

    let exit = document.querySelector(".grid-hard .labyrinth-exit");
    exit.classList.remove("hide");

    // Hide the grids that are not being played.
    let easyGrid = document.getElementById("easy-game");
    let interGrid = document.getElementById("inter-game");
    easyGrid.style.display = "none";
    interGrid.style.display = "none";
  }

  // Set the array hosting the indexes questions depending on game's settings.
  if (level === "Apprentice" && subject.id === "volcano") {
    getVolcanoEasyQuestions();
  } else if (level === "Apprentice" && subject.id === "jungle") {
    getJungleEasyQuestions();
  } else if (level === "Apprentice" && subject.id === "ocean") {
    getOceanEasyQuestions();
  } else if (level === "Apprentice" && subject.id === "earth") {
    getEarthEasyQuestions();
  } else if (level === "Scientist" && subject.id === "volcano") {
    getVolcanoInterQuestions();
  } else if (level === "Scientist" && subject.id === "jungle") {
    getJungleInterQuestions();
  } else if (level === "Scientist" && subject.id === "ocean") {
    getOceanInterQuestions();
  } else if (level === "Scientist" && subject.id === "earth") {
    getEarthInterQuestions();
  } else if (level === "Genius" && subject.id === "volcano") {
    getVolcanoHardQuestions();
  } else if (level === "Genius" && subject.id === "jungle") {
    getJungleHardQuestions();
  } else if (level === "Genius" && subject.id === "ocean") {
    getOceanHardQuestions();
  } else if (level === "Genius" && subject.id === "earth") {
    getEarthHardQuestions();
  }

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

  // Check if some achievements are displayed and if so hide them.

  let achievements = document.querySelectorAll("#achievements i");
  achievements.forEach((reward) => {
    if (reward.classList.contains("hide") === false) {
      reward.classList.add("hide");
    }
  });

  let noReward = document.getElementById("no-reward");
  if (noReward.classList.contains("hide") === false) {
    noReward.classList.add("hide");
  }
}

// Start a new game when clicking on the New game button.
let newGameButton = document.querySelector("[data-new-game]");
newGameButton.addEventListener("click", setGameParameters);

// Close the settings modal.
let settingsModal = document.getElementsByClassName("settings-modal")[0];
let settingsOverlay = document.getElementsByClassName("settings-overlay")[0];
settingsModal.addEventListener("click", function () {
  settingsOverlay.classList.remove("overlay-active");
  settingsModal.classList.remove("modal-active")
})

settingsOverlay.addEventListener("click", function () {
  settingsOverlay.classList.remove("overlay-active");
  settingsModal.classList.remove("modal-active")
})


// Start the game and set game parameters.
startButton.addEventListener("click", function () {

  // Get the game settings.
  let level = document.getElementById("button-display").innerText;
  let subject = document.getElementsByClassName("selected-subject")[0];


  if (level !== "Set Level" && typeof subject !== "undefined") {
    displayTheme(subject);

    // Display the game modal.
    let game = document.getElementById("game");
    game.classList.add("modal-active");
    gameOverlay.classList.add("overlay-active");

    // Display the game settings (level  and subject) on the game interface.
    document.querySelector("[data-game-level]").innerText = level;
    document.querySelector("[data-game-subject]").innerText = subject.id;

    // Set game parameters for a new party.
    setGameParameters();

  } else if (level === "Set Level" || typeof subject === "undefined") {

    let settingsModal = document.getElementsByClassName("settings-modal")[0];
    let settingsOverlay = document.getElementsByClassName("settings-overlay")[0];

    settingsOverlay.classList.add("overlay-active");
    settingsModal.classList.add("modal-active")
  }
});

// ----------------- Display the game

// Easy game.
function displayTheme(subject) {
  let subjectId = subject.id;

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
}

// Set the labyrinth theme.
function setPath(subjectId) {
  let level = document.getElementById("button-display").innerText;
  let differentPaths;

  if (level === "Apprentice") {
    let easyGame = document.getElementById("easy-game");
    differentPaths = easyGame.querySelectorAll("img");
  } else if (level == "Scientist") {
    let interGame = document.getElementById("inter-game");
    differentPaths = interGame.querySelectorAll("img");
  } else if (level == "Genius") {
    let hardGame = document.getElementById("hard-game");
    differentPaths = hardGame.querySelectorAll("img");
  }

  differentPaths.forEach(path => {
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
let closeGameButton = document.getElementById("exit-game");

closeGameButton.addEventListener("click", function () {
  closeGame();
});

function closeGame() {
  let level = document.getElementById("button-display").innerText;
  let openGame = document.getElementById("game");

  openGame.classList.remove("modal-active");
  gameOverlay.classList.remove("overlay-active");

  // Close the game open depending on the level.
  if (level === "Apprentice") {
    let easyGame = document.getElementById("easy-game");
    easyGame.classList.add("hide");
  } else if (level === "Scientist") {
    let interGame = document.getElementById("inter-game");
    interGame.classList.add("hide");
  } else if (level === "Genius") {
    let hardGame = document.getElementById("hard-game");
    hardGame.classList.add("hide");
  }

  // Reset the Avatars and Exits Items to be hidden.
  let allAvatars = document.querySelectorAll(".avatar");
  let allExits = document.querySelectorAll(".labyrinth-exit");

  allAvatars.forEach(avatar => {
    if (avatar.classList.contains("hide") === false) {
      avatar.classList.add("hide");
    }
  })

  allExits.forEach(exit => {
    if (exit.classList.contains("hide") === false) {
      exit.classList.add("hide");
    }
  })

  // Reset the grids display property to grid.
  let grids = document.querySelectorAll(".grids");
  grids.forEach(grid => {
    if (grid.style.display === "none") {
      grid.style.display = "grid";
    }
  })
}

// Move the Avatar (player)

let controlButtons = document.querySelectorAll("[data-button-direction]");

for (let button of controlButtons) {
  button.addEventListener("click", function () {

    let level = document.getElementById("button-display").innerText;

    // Get the direction the player chose.
    let chosenDirection = button.dataset.buttonDirection;
    let availableDirections = "";

    // Get the position of the player (depending on the grid level) and the grid-area he is on.
    if (level === "Apprentice") {
      let avatar = document.getElementById("easy-player");
      let avatarPosition = avatar.className.substring(7);
      let gridItemID = "easy-" + avatarPosition;
      let gridItem = document.getElementById(gridItemID);

      // Get the available directions from this grid-area.
      availableDirections = gridItem.dataset.easyAvailableDirection;

    } else if (level === "Scientist") {
      let avatar = document.getElementById("inter-player");
      let avatarPosition = avatar.className.substring(7);
      let gridItemID = "inter-" + avatarPosition;
      let gridItem = document.getElementById(gridItemID);

      // Get the available directions from this grid-area.
      availableDirections = gridItem.dataset.easyAvailableDirection;

    } else if (level === "Genius") {
      let avatar = document.getElementById("hard-player");
      let avatarPosition = avatar.className.substring(7);
      let gridItemID = "hard-" + avatarPosition;
      let gridItem = document.getElementById(gridItemID);

      // Get the available directions from this grid-area.
      availableDirections = gridItem.dataset.easyAvailableDirection;
    }

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
      // Credit for the substring method used with the index of method to:
      //[stack overflow](https://stackoverflow.com/questions/29650867/remove-part-of-string-in-javascript).

      // Extract the new position and move the avatar.
      let newPosition = direction.substring(direction.indexOf("-") + 1);
      moveAvatar(newPosition);
    }
  }
}

// Move the Avatar.
function moveAvatar(newPosition) {
  let level = document.getElementById("button-display").innerText;
  let avatar;
  if (level === "Apprentice") {
    avatar = document.getElementById("easy-player");
  } else if (level === "Scientist") {
    avatar = document.getElementById("inter-player");
  } else if (level === "Genius") {
    avatar = document.getElementById("hard-player");
  }

  let avatarClassList = avatar.classList;
  let avatarPosition = avatar.className.substring(7);
  avatarClassList.remove(avatarPosition);
  avatarClassList.add(newPosition);

  // Check if the the grid area (case) has a question.
  checkForQuestion();
  checkForExit();
}

function checkForQuestion() {
  let level = document.getElementById("button-display").innerText;

  // Get the position of the avatar and the grid.
  let avatar;
  let grid;
  if (level === "Apprentice") {
    avatar = document.getElementById("easy-player");
    grid = document.getElementById("easy-game");
  } else if (level === "Scientist") {
    avatar = document.getElementById("inter-player");
    grid = document.getElementById("inter-game");
  } else if (level === "Genius") {
    avatar = document.getElementById("hard-player");
    grid = document.getElementById("hard-game");
  }

  let avatarPosition = avatar.className.substring(7);

  // Get the positions of the questions.
  let questionCases = grid.querySelectorAll(".question");

  // Check if the avatar is on a question case.
  questionCases.forEach((question) => {
    if (question.classList.contains(avatarPosition)) {
      displayQuestion();
    }
  });
}

// Call the function to display questions depending on the level and the subject.
function displayQuestion() {
  // Display the modal.
  let questionModal = document.getElementsByClassName("question-modal")[0];
  let questionOverlay = document.getElementsByClassName("ongame-overlay")[0];

  // Check if a radio is selected and if so unselect it.
  let answers = document.querySelectorAll("#question-form input");
  answers.forEach((answer) => {
    if (answer.checked) {
      answer.checked = false;
    }
  });

  questionModal.classList.add("modal-active");
  questionOverlay.classList.add("overlay-active");

  let level = document.getElementById("button-display").innerText;
  let subject = document.getElementsByClassName("selected-subject")[0];

  // Populate the question modal depending on the level and the subject selected.
  if (level === "Apprentice" && subject.id === "volcano") {
    populateVolcanoEasyQuestion();
  } else if (level === "Apprentice" && subject.id === "jungle") {
    populateJungleEasyQuestion();
  } else if (level === "Apprentice" && subject.id === "ocean") {
    populateOceanEasyQuestion();
  } else if (level === "Apprentice" && subject.id === "earth") {
    populateEarthEasyQuestion();
  } else if (level === "Scientist" && subject.id === "volcano") {
    populateVolcanoInterQuestion();
  } else if (level === "Scientist" && subject.id === "jungle") {
    populateJungleInterQuestion();
  } else if (level === "Scientist" && subject.id === "ocean") {
    populateOceanInterQuestion();
  } else if (level === "Scientist" && subject.id === "earth") {
    populateEarthInterQuestion();
  } else if (level === "Genius" && subject.id === "volcano") {
    populateVolcanoHardQuestion();
  } else if (level === "Genius" && subject.id === "jungle") {
    populateJungleHardQuestion();
  } else if (level === "Genius" && subject.id === "ocean") {
    populateOceanHardQuestion();
  } else if (level === "Genius" && subject.id === "earth") {
    populateEarthHardQuestion();
  }
}

// Display the Question. --------------- EASY -------------------- 
// Create a variable to store the rigth answer and pass it to the displayWrongAnswer function for displaying it in the modal.
let correctAnswer;

function populateVolcanoEasyQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/easy-questions/volcano-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoEasyQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = volcanoEasyQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkVolcanoEasyAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkVolcanoEasyAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/easy-questions/volcano-easy-questions.JSON")
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
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateJungleEasyQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/easy-questions/jungle-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleEasyQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = jungleEasyQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkJungleEasyAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkJungleEasyAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/easy-questions/jungle-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleEasyQuestions = data;
      for (let questions of jungleEasyQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateOceanEasyQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/easy-questions/ocean-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanEasyQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = oceanEasyQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkOceanEasyAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkOceanEasyAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/easy-questions/ocean-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanEasyQuestions = data;
      for (let questions of oceanEasyQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateEarthEasyQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/easy-questions/earth-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthEasyQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = earthEasyQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkEarthEasyAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkEarthEasyAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/easy-questions/earth-easy-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthEasyQuestions = data;
      for (let questions of earthEasyQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question. --------------- INTERMEDIATE --------------------
function populateVolcanoInterQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/inter-questions/volcano-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoInterQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = volcanoInterQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkVolcanoInterAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer. 
function checkVolcanoInterAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/inter-questions/volcano-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoInterQuestions = data;
      for (let questions of volcanoInterQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateJungleInterQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/inter-questions/jungle-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleInterQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = jungleInterQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkJungleInterAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkJungleInterAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/inter-questions/jungle-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleInterQuestions = data;
      for (let questions of jungleInterQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateOceanInterQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/inter-questions/ocean-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanInterQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = oceanInterQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkOceanInterAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkOceanInterAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/inter-questions/ocean-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanInterQuestions = data;
      for (let questions of oceanInterQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateEarthInterQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/inter-questions/earth-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthInterQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = earthInterQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkEarthInterAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkEarthInterAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/inter-questions/earth-inter-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthInterQuestions = data;
      for (let questions of earthInterQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question. --------------- HARD --------------------
function populateVolcanoHardQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/hard-questions/volcano-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoHardQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = volcanoHardQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkVolcanoHardAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkVolcanoHardAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/hard-questions/volcano-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let volcanoHardQuestions = data;
      for (let questions of volcanoHardQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateJungleHardQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/hard-questions/jungle-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleHardQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = jungleHardQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkJungleHardAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkJungleHardAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/hard-questions/jungle-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let jungleHardQuestions = data;
      for (let questions of jungleHardQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateOceanHardQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/hard-questions/ocean-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanHardQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = oceanHardQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkOceanHardAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkOceanHardAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/hard-questions/ocean-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let oceanHardQuestions = data;
      for (let questions of oceanHardQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the Question.
function populateEarthHardQuestion() {
  // Get the questions from the json file.
  fetch("assets/JSON/hard-questions/earth-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthHardQuestions = data;

      // select a random question.
      // Generate a random number that does not to appear twice with the help of
      //[stack overflow](https://stackoverflow.com/questions/15192614/javascript-how-to-stop-a-random-number-from-appearing-twice)

      if (questionsNumber.length > 0) {
        let randomQuestionIndex = questionsNumber.splice(Math.random() * questionsNumber.length, 1)[0];

        let randomQuestion = earthHardQuestions[randomQuestionIndex];

        let questionDisplay = document.getElementById("question-display");
        questionDisplay.innerText = randomQuestion.question;

        let firstOption = document.querySelectorAll("[for='answer-one']")[0];
        firstOption.innerText = randomQuestion.optionOne;

        let secondOption = document.querySelectorAll("[for='answer-two']")[0];
        secondOption.innerText = randomQuestion.optionTwo;

        let thirdOption = document.querySelectorAll("[for='answer-three']")[0];
        thirdOption.innerText = randomQuestion.optionThree;
      } else {
        displayNoMoreQuestionsModal();
        closeQuestion();
      }
    });

  // Submit the answer.
  let questionForm = document.getElementById("question-form");
  questionForm.addEventListener(
    "submit",
    function () {
      checkEarthHardAnswer();
    }, {
      once: true
    }
  );
}

// Check the answer.
function checkEarthHardAnswer() {
  let askedQuestion = document.getElementById("question-display").innerText;

  fetch("assets/JSON/hard-questions/earth-hard-questions.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let earthHardQuestions = data;
      for (let questions of earthHardQuestions) {
        if (questions.question === askedQuestion) {
          let answers = document.querySelectorAll("#question-form input");
          answers.forEach((answer) => {
            if (answer.checked) {
              let chosenAnswer = answer.nextElementSibling.innerText;
              if (chosenAnswer === questions.correctAnswer) {
                displayRightAnswerModal();
                closeQuestion();
                incrementScrore();
              } else {
                correctAnswer = questions.correctAnswer
                displayWrongAnswerModal(correctAnswer);
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

// Display the right right answer modal.
function displayRightAnswerModal() {
  let rightAnswer = document.getElementById("right-answer");
  rightAnswer.classList.add("modal-active");
  let messagesOverlay = document.getElementsByClassName("messages-overlay")[0];
  messagesOverlay.classList.add("overlay-active");
}

// Diplay the wrong anser modal.
function displayWrongAnswerModal(correctAnswer) {
  let wrongAnswer = document.getElementById("wrong-answer");
  let messagesOverlay = document.getElementsByClassName("messages-overlay")[0];
  let displayCorrectAnswer = document.querySelector("#wrong-answer span");

  displayCorrectAnswer.innerText = correctAnswer;

  wrongAnswer.classList.add("modal-active");
  messagesOverlay.classList.add("overlay-active");
}

function displayNoMoreQuestionsModal() {
  let noMoreQuestions = document.getElementsByClassName("no-questions")[0];
  let messagesOverlay = document.getElementsByClassName("messages-overlay")[0];
  
  noMoreQuestions.classList.add("modal-active");
  messagesOverlay.classList.add("overlay-active");

}

// Close Answers, Game over, no questions modals and overlay.
document.addEventListener("click", function () {

  let rightAnswer = document.getElementById("right-answer");
  let wrongAnswer = document.getElementById("wrong-answer");
  let gameOverDisplay = document.getElementById("game-over");
  let messagesOverlay = document.getElementsByClassName("messages-overlay")[0];
  let noMoreQuestions = document.getElementsByClassName("no-questions")[0];

  if (rightAnswer.classList.contains("modal-active")) {
    rightAnswer.classList.remove("modal-active");
    messagesOverlay.classList.remove("overlay-active");

  } else if (wrongAnswer.classList.contains("modal-active")) {
    wrongAnswer.classList.remove("modal-active");
    checkStrikes();

  } else if (noMoreQuestions.classList.contains("modal-active")) {
    noMoreQuestions.classList.remove("modal-active");
    messagesOverlay.classList.remove("overlay-active");

  } else if (gameOverDisplay.classList.contains("modal-active")) {
    gameOverDisplay.classList.remove("modal-active");
    gameOver();
    messagesOverlay.classList.remove("overlay-active");
  }
})



// Close the question modal.
function closeQuestion() {
  let questionModal = document.getElementsByClassName("question-modal")[0];
  let questionOverlay = document.getElementsByClassName("ongame-overlay")[0];

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

  // Strike display.
  if (Number(localStorage.strike) === 1) {
    let strikeOne = document.querySelector(".strike-one i");
    strikeOne.classList.remove("hide");
  } else if (Number(localStorage.strike) === 2) {
    let strikeTwo = document.querySelector(".strike-two i");
    strikeTwo.classList.remove("hide");
  }
}

// Check if the Strikes have reached the limit for the selected level and call gameOver if it has.
function checkStrikes() {

  let level = document.getElementById("button-display").innerText;
  if (level === "Apprentice" && Number(localStorage.strike) === 3) {
    displayGameOver();
  } else if (level === "Scientist" && Number(localStorage.strike) === 2) {
    displayGameOver();
  } else if (level === "Genius" && Number(localStorage.strike) === 1) {
    displayGameOver();
  } else {
    let messagesOverlay = document.getElementsByClassName("messages-overlay")[0];
    messagesOverlay.classList.remove("overlay-active");
  }
}


function displayGameOver() {
  let gameOverDisplay = document.getElementById("game-over");
  let messagesOverlay = document.getElementsByClassName("messages-overlay")[0];

  gameOverDisplay.classList.add("modal-active");
  messagesOverlay.classList.add("overlay-active");
}

function gameOver() {
  closeQuestion();
  closeGame();
}

// Finish the Game

// Get the exit and avatar position and check if they are on the same grid.
// If the player reach the exit, display the final score and atrribute achievement
// depending on the final score.

function checkForExit() {
  let level = document.getElementById("button-display").innerText;
  let exit;
  let avatar;

  if (level === "Apprentice") {
    avatar = document.getElementById("easy-player");
    exit = document.querySelector("#easy-game .labyrinth-exit").className.substring(15);
  } else if (level === "Scientist") {
    avatar = document.getElementById("inter-player");
    exit = document.querySelector("#inter-game .labyrinth-exit").className.substring(15);
  } else if (level === "Genius") {
    avatar = document.getElementById("hard-player");
    exit = document.querySelector("#hard-game .labyrinth-exit").className.substring(15);
  }

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
  let resulstOverlay = document.getElementsByClassName("ongame-overlay")[0];
  let finalScore = Number(localStorage.score);
  let numberOfStrikes = Number(localStorage.strike);
  let displayScore = document.getElementById("score");

  resultsModal.classList.add("modal-active");
  resulstOverlay.classList.add("overlay-active");
  displayScore.innerText = finalScore;

  // Display rewards depending on level, subjects and if no strikes has been received
  // and save them with localStorage.

  // Get the rewards.
  let flagReward = document.getElementById("flag");
  let infinityReward = document.getElementById("infinity");
  let graduationReward = document.getElementById("graduation");
  let universityReward = document.getElementById("university");
  let atomReward = document.getElementById("atom");
  let flaskReward = document.getElementById("flask");
  let brainReward = document.getElementById("brain");
  let robotReward = document.getElementById("robot");
  let trophyReward = document.getElementById("trophy");
  let hatReward = document.getElementById("hat");
  let gamepadReward = document.getElementById("gamepad");
  let astronautReward = document.getElementById("astronaut");
  let noReward = document.getElementById("no-reward");

  if (
    level === "Apprentice" && subject.id === "volcano" && numberOfStrikes === 0) {
    flagReward.classList.remove("hide");
    localStorage.flag = 1;

  } else if (level === "Apprentice" && subject.id === "jungle" && numberOfStrikes === 0) {
    infinityReward.classList.remove("hide");
    localStorage.infinity = 1;

  } else if (level === "Apprentice" && subject.id === "ocean" && numberOfStrikes === 0) {
    graduationReward.classList.remove("hide");
    localStorage.graduation = 1;

  } else if (level === "Apprentice" && subject.id === "earth" && numberOfStrikes === 0) {
    universityReward.classList.remove("hide");
    localStorage.university = 1;

  } else if (level === "Scientist" && subject.id === "volcano" && numberOfStrikes === 0) {
    atomReward.classList.remove("hide");
    localStorage.atom = 1;

  } else if (level === "Scientist" && subject.id === "jungle" && numberOfStrikes === 0) {
    flaskReward.classList.remove("hide");
    localStorage.flask = 1;

  } else if (level === "Scientist" && subject.id === "ocean" && numberOfStrikes === 0) {
    brainReward.classList.remove("hide");
    localStorage.brain = 1;

  } else if (level === "Scientist" && subject.id === "earth" && numberOfStrikes === 0) {
    robotReward.classList.remove("hide");
    localStorage.robot = 1;

  } else if (level === "Genius" && subject.id === "volcano" && numberOfStrikes === 0) {
    trophyReward.classList.remove("hide");
    localStorage.trophy = 1;

  } else if (level === "Genius" && subject.id === "jungle" && numberOfStrikes === 0) {
    hatReward.classList.remove("hide");
    localStorage.hat = 1;

  } else if (level === "Genius" && subject.id === "ocean" && numberOfStrikes === 0) {
    gamepadReward.classList.remove("hide");
    localStorage.gamepad = 1;

  } else if (level === "Genius" && subject.id === "earth" && numberOfStrikes === 0) {
    astronautReward.classList.remove("hide");
    localStorage.astronaut = 1;

  } else {
    noReward.classList.remove("hide");
  }

  displayAchievements();

  let closeResultsButton = document.querySelector(
    ".results-modal .close-modal"
  );
  closeResultsButton.addEventListener("click", function () {
    resultsModal.classList.remove("modal-active");
    resulstOverlay.classList.remove("overlay-active");
    closeGame();
  });
}

// Dislpay game achievements.

function displayAchievements() {
  let permFlagReward = document.getElementById("perm-flag");
  let permInfinityReward = document.getElementById("perm-infinity");
  let permGraduationReward = document.getElementById("perm-graduation");
  let permUniversityReward = document.getElementById("perm-university");
  let permAtomReward = document.getElementById("perm-atom");
  let permFlaskReward = document.getElementById("perm-flask");
  let permBrainReward = document.getElementById("perm-brain");
  let permRobotReward = document.getElementById("perm-robot");
  let permTrophyReward = document.getElementById("perm-trophy");
  let permHatReward = document.getElementById("perm-hat");
  let permGamepadReward = document.getElementById("perm-gamepad");
  let permAstronautReward = document.getElementById("perm-astronaut");

  if (Number(localStorage.flag) === 1) {
    permFlagReward.classList.remove("hide");
  }

  if (Number(localStorage.infinity) === 1) {
    permInfinityReward.classList.remove("hide");
  }

  if (Number(localStorage.graduation) === 1) {
    permGraduationReward.classList.remove("hide");
  }

  if (Number(localStorage.university) === 1) {
    permUniversityReward.classList.remove("hide");
  }

  if (Number(localStorage.atom) === 1) {
    permAtomReward.classList.remove("hide");
  }

  if (Number(localStorage.flask) === 1) {
    permFlaskReward.classList.remove("hide");
  }

  if (Number(localStorage.brain) === 1) {
    permBrainReward.classList.remove("hide");
  }

  if (Number(localStorage.robot) === 1) {
    permRobotReward.classList.remove("hide");
  }

  if (Number(localStorage.trophy) === 1) {
    permTrophyReward.classList.remove("hide");
  }

  if (Number(localStorage.hat) === 1) {
    permHatReward.classList.remove("hide");
  }

  if (Number(localStorage.gamepad) === 1) {
    permGamepadReward.classList.remove("hide");
  }

  if (Number(localStorage.astronaut) === 1) {
    permAstronautReward.classList.remove("hide");
  }
}