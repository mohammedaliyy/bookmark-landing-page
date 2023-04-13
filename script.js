// Active section
const openHamburger = document.querySelector(".header__hamburger");
const active = document.querySelector(".active");
const closeHamburger = document.querySelector(".active__close");
const header = document.querySelector(".header");
const navItems = document.querySelectorAll(".active__items a");

openHamburger.addEventListener("click", function () {
  active.classList.add("toggle");
  header.classList.add("transition");
});

closeHamburger.addEventListener("click", function () {
  active.classList.remove("toggle");
  header.classList.remove("transition");
});

navItems.forEach((e) => {
  e.addEventListener("click", function () {
    active.classList.remove("toggle");
    header.classList.remove("transition");
  });
});

// Features section
let features__nav = document.querySelectorAll(".features__nav p");

const hovImg = document.querySelector(".features__img img");
const hovHead = document.querySelector(".features__text h1");
const hovPar = document.querySelector(".features__text p");
const hovDiv = document.querySelector(".features__hov");

const tabsInfo = [
  {
    img: "images/illustration-features-tab-1.svg",
    head: "Bookmark in one click",
    par: `Organize your bookmarks however you like. Our simple drag-and-drop
    interface gives you complete control over how you manage your
    favourite sites.`,
  },

  {
    img: "images/illustration-features-tab-2.svg",
    head: "Intelligent search",
    par: `Organize your bookmarks however you like. Our simple drag-and-drop
    interface gives you complete control over how you manage your
    favourite sites.`,
  },

  {
    img: "images/illustration-features-tab-3.svg",
    head: "Share your bookmarks",
    par: `Organize your bookmarks however you like. Our simple drag-and-drop
    interface gives you complete control over how you manage your
    favourite sites.`,
  },
];

features__nav.forEach((e) => {
  const arrOfNavs = Array.from(features__nav);
  const whichIndex = arrOfNavs.indexOf(e);
  e.addEventListener("click", function () {
    hovImg.src = tabsInfo[whichIndex].img;
    hovHead.innerHTML = tabsInfo[whichIndex].head;
    hovPar.innerHTML = tabsInfo[whichIndex].par;

    features__nav.forEach((all) => {
      all.classList.remove("active__p");
      e.classList.add("active__p");
    });
  });
});

// Questions section
const questions = document.querySelectorAll(".questions__item");
const answers = document.querySelectorAll(".questions__answer");
const arrowsImg = document.querySelectorAll(".questions__question img");
const questionsQuestion = document.querySelectorAll(".questions__question p");

questions.forEach((e) => {
  let arrayVersion = Array.from(questions);
  const whichAnswer = arrayVersion.indexOf(e);
  e.addEventListener("click", function () {
    answers[whichAnswer].classList.toggle("helper");
    arrowsImg[whichAnswer].classList.toggle("change__direction");
    questionsQuestion[whichAnswer].classList.toggle("question__p");
  });
});
