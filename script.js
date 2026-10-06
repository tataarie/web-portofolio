// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typing");

const text = [
    "RPL",
    "Web Developer",
    "Programmer Pemula"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentText = text[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex === text.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 70 : 120
    );
}


typingEffect();


// =========================
// MENU MOBILE
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// =========================
// TUTUP MENU SETELAH DIKLIK
// =========================

const navLinks = document.querySelectorAll("#navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});