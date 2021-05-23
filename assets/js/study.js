/* jshint esversion: 8, jquery: true */

// Add event listener once the page is fully loaded.
$(document).ready(function () {
  // To the magnifier button.
  $(".magnifier").click(toggleInfo);

  // To the subject buttons.
  $(".study-subjects").click(displayContent);
});

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