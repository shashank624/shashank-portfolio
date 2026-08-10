// ===============================
// Typing Animation
// ===============================

const text = [
  "Web Developer",
  "Python Learner",
  "Frontend Developer",
  "Full Stack Developer",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.querySelector("#typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(erase, 1500);
  } else {
    setTimeout(type, 120);
  }
}

function erase() {
  letter = currentText.slice(0, --index);

  document.querySelector("#typing").textContent = letter;

  if (letter.length === 0) {
    count++;

    index = 0;

    setTimeout(type, 300);
  } else {
    setTimeout(erase, 60);
  }
}

type();

// ===============================
// Dark Mode
// ===============================

const darkBtn = document.querySelector("#darkMode");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.innerHTML = "☀️";
  } else {
    darkBtn.innerHTML = "🌙";
  }
});

// ===============================
// Mobile Hamburger Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ===============================
// Close Menu After Click
// ===============================

const links = document.querySelectorAll("#menu a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

function reveal() {
  sections.forEach((section) => {
    let top = section.getBoundingClientRect().top;

    let height = window.innerHeight;

    if (top < height - 100) {
      section.style.opacity = "1";

      section.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// Console Message
// ===============================

console.log("Welcome to Shashank Portfolio 🚀");
