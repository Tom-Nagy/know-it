/* jshint esversion: 8, jquery: true */

$(document).ready(function () {
  // Template of how to add the service [emailjs.com](https://www.emailjs.com/docs/sdk/send/) slightly adjusted.
  $("#contact-form").submit(function (contactForm) {
    contactForm.preventDefault();

    let templateParams = {
      from_name: $("#name").val(),
      from_email: $("#email").val(),
      message: $("#message").val(),
    };

    emailjs.send("Gmail", "know-it", templateParams).then(
      function (response) {
        emailSuccess();
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        emailFailed();
        console.log("FAILED...", error);
      }
    );

    return false;
  });

});

// Modals that appears once the form submitted depending on the submission outcome.
let formSuccess = document.getElementById("email-sent");
let formFailed = document.getElementById("email-error");
let overlay = document.getElementsByClassName("overlay")[0];
let closeModalButtons = document.querySelectorAll("[data-close-modal]");

// If email send
function emailSuccess() {
  formSuccess.classList.add("modal-active");
  overlay.classList.add("overlay-active");
}

// If email not send 
function emailFailed() {
  formFailed.classList.add("modal-active");
  overlay.classList.add("overlay-active");
}

// Close the modals

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
  let modal = document.getElementsByClassName("modal-active")[0];
  closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  let modal = document.getElementsByClassName("modal-active")[0];
  closeModal(modal);
});

function closeModal(modal) {
  modal.classList.remove("modal-active");
  overlay.classList.remove("overlay-active");
}