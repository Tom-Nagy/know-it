// Add an eventListeners when the page is fully loaded. -----------------------
$(document).ready(function () {
  // To the navigation menu button.
  $("#navigation-button").click(toggleNavMenu);
  
  // To the magnifier button.
  $(".magnifier").click(toggleInfo);

  // To the subject buttons.
  $(".study-subjects").click(displayContent);

 

});

// Navigation  ---------------------------------------------------------------

// Toggle the navigation menu.
function toggleNavMenu() {

  let navMenu = $(".navigation-menu");
  navMenu.toggle(300);
}
/*
$(document).on("click", function() {
  let navMenu = $(".navigation-menu");
  let navButton = $("#navigation-button");

  if (this !== navButton){
    navMenu.hide(300);
  }
})
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

