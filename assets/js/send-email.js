$(document).ready(function () {
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

  $(".close-modal").on("click", closeModal);
});

function emailSuccess() {
  let formSuccess = $("#email-sent");
  formSuccess.addClass("show-modal");
}

function emailFailed() {
  let formFailed = $("#email-error");
  formFailed.addClass("show-modal");
}

function closeModal() {
  let openModals = $(".contact-modals").hasClass("show-modal");
  if (openModals) {
    $(".contact-modals").removeClass("show-modal");
  }
}
