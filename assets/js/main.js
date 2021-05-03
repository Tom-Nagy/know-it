// Add an eventListeners when the page is fully loaded. -----------------------
$(document).ready(function () {
  // To the navigation menu button.
  $("#navigation-button").click(toggleNavMenu);
  //$("body").not($("#navigation-button")).click(toggleNavMenuOff); toggle off the nav menu when clicking anywhere on the page except navButton.

  // To the magnifier button.
  $(".magnifier").click(toggleInfo);

  // To the subject buttons.
  $(".study-subjects").click(displayContent);

  // To the form in the contact page.
  $("#contact-form").submit(sendForm(this));

});

// Navigation  ---------------------------------------------------------------

// Toggle the navigation menu.
function toggleNavMenu() {

  let navMenu = $(".navigation-menu");
  navMenu.toggle(300);
}

/*
function toggleNavMenuOff () {
  let navMenu = $(".navigation-menu");
  navMenu.hide(300);
}
*/

// Study page  ---------------------------------------------------------------

// Toggle the extra content.
function toggleInfo () {

    let extraInfo = $(this).next();
    extraInfo.toggle(300);
}

// Display the selected content.
function displayContent() {

  let volcanoArticle = $(".volcano");
  let jungleArticle = $(".jungle");
  let oceanArticle = $(".ocean");

  if ($(this).hasClass("volcano-button")) {
    volcanoArticle.show(300);
    jungleArticle.hide(0);
    oceanArticle.hide(0);
  } else if ($(this).hasClass("jungle-button")) {
    jungleArticle.show(300);
    volcanoArticle.hide(0);
    oceanArticle.hide(0);
  } else if ($(this).hasClass("ocean-button")) {
    oceanArticle.show(300);
    volcanoArticle.hide(0);
    jungleArticle.hide(0);
  } else if ($(this).hasClass("earth-button")) {
    volcanoArticle.show(300);
    jungleArticle.show(300);
    oceanArticle.show(300);
  }
}

// Contact page  ---------------------------------------------------------------

function sendForm(contactForm) {

  contactForm.preventDefault();

  let templateParams = {
    "from_name" : contactForm.name.value,
    "from_email" : contactForm.email.value,
    "message" : contactForm.message.value
  } 
  
  emailjs.send("Gmail", "know-it", templateParams) 
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });

 return false;
}