"use strict";

const hamburger = document.querySelector(".navbar__hamburger");
const linkContainer = document.querySelector(".navbar__menu");
const links = document.querySelectorAll(".navbar__menu a");

hamburger.addEventListener("click", function (e) {
  e.target.classList.contains("navbar__hamburger__line");
  linkContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const closeMedia = function () {
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      linkContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
};
closeMedia();
// Close the menu on outside click
document.addEventListener("click", function (e) {
  if (!linkContainer.contains(e.target) && !hamburger.contains(e.target)) {
    linkContainer.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// const handleMediaChange = function (e) {
//   if (e.matches) {
//     closeMedia();
//   }
// };
// const mediaQuery = window.matchMedia("(max-width: 768px)");

// mediaQuery.addEventListener("change", handleMediaChange);

// // // Initial check
// handleMediaChange(mediaQuery);
