//set elements
let menuButton = document.getElementById("menu-button");
let overlay = document.getElementById("overlay");
let navMenu = document.getElementById("nav-menu");

//menu button icon images
let openImage = "assets/images/icon-menu.svg";
let closeImage = "assets/images/icon-menu-close.svg";

//assign onclick function for menu button to open the menu
menuButton.onclick = openMenu;
//assign onclick for overlay to close the menu
overlay.onclick = closeMenu;

/* function declarations */

//opens the hamburger menu
function openMenu() {
  //change button image to close
  menuButton.children[0].src = closeImage;
  //assign onclick function for menu button to close the menu
  menuButton.onclick = closeMenu;
  //show the overlay and menu
  overlay.classList.add("visible");
  navMenu.classList.add("visible");
  //set aria-expanded to true for the menu button
  menuButton.setAttribute("aria-expanded", true);
  //disable scrolling for body
  document.body.classList.add("no-scroll");
}

//closes the hamburger menu
function closeMenu() {
  //change button image to open
  menuButton.children[0].src = openImage;
  //assign onclick function for menu button to open the menu
  menuButton.onclick = openMenu;
  //hide the overlay and menu
  overlay.classList.remove("visible");
  navMenu.classList.remove("visible");
  //set aria-expanded to false for the menu button
  menuButton.setAttribute("aria-expanded", false);
  //enable scrolling for body
  document.body.classList.remove("no-scroll");
}
