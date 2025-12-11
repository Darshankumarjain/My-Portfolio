function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const texts = ["Web Developer", "Python Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function typeEffect() {
  currentText = texts[count];
  
  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".section__text__p2").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before deleting
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length; // move to next word
    setTimeout(typeEffect, 500); // pause before typing next word
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150); // speed
  }
}

typeEffect();
