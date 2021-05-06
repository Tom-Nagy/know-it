// Toggle of the navigation menu.


let menuButton = document.getElementById("navigation-button");


// Open navigation menu.
menuButton.addEventListener("click", () => {
  let navMenu = document.getElementsByClassName("navigation-menu")[0];
  if (navMenu.classList.contains("menu-active")) {
    closeNavMenu(navMenu);
  } else {
    openNavMenu(navMenu);
  }
})

/*
// Close navigation menu when clicking elsewhere on the document.
let triggerElements = document.querySelectorAll("*:not(#navigation-button)");

triggerElements.forEach(element => {
  element.addEventListener("click", () => {
    let navMenu = document.getElementsByClassName("navigation-menu")[0];
    if (navMenu.classList.contains("menu-active")) {
    closeNavMenu(navMenu);
  }
  })
})
*/

// Open navigation menu.
function openNavMenu(navMenu) {
  if (navMenu === null) return;
  navMenu.classList.add("menu-active");
}

// Close navigation menu.
function closeNavMenu(navMenu) {
  if (navMenu === null) return;
  navMenu.classList.remove("menu-active");
}


