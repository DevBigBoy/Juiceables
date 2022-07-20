/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav__link");

const actionLink = () => {
  navMenu.classList.remove("show-menu");
};

navLinks.forEach((link) => link.addEventListener("click", actionLink));

/*=============== GSAP ANIMATION ===============*/
TweenMax.from(".home__title", 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__description", 1, {
  delay: 0.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__button", 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__liquid", 1, {
  delay: 0.7,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__juice-animate", 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__apple1", 1, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__apple2", 1, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(1)", 2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(2)", 2, {
  delay: 1.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(3)", 2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(4)", 2, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(5)", 2, {
  delay: 1.7,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".home__leaf:nth-child(6)", 2, {
  delay: 1.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
