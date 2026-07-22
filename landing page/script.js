// ==========================
// Typing Animation
// ==========================

const typingText = document.querySelector(".typing");

const words = [
    "Third Year AIML Student",
    "Python Developer",
    "AI & ML Enthusiast",
    "Web Developer",
    "Unity VR Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ==========================
// Scroll Reveal Animation
// ==========================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach((section) => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ==========================
// Active Navigation
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Floating Background Effect
// ==========================

const circles = document.querySelectorAll(".circle");

document.addEventListener("mousemove", (e) => {

    circles.forEach((circle, index) => {

        const speed = (index + 1) * 0.015;

        circle.style.transform =
        `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;

    });

});


// ==========================
// Button Hover Animation
// ==========================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// ==========================
// Profile Image Animation
// ==========================

const profile = document.querySelector(".hero-image img");

profile.addEventListener("mouseenter", () => {

    profile.style.transform = "scale(1.08) rotate(3deg)";

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "scale(1) rotate(0deg)";

});


// ==========================
// Skill Card Animation
// ==========================

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "translateY(-12px) scale(1.05)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "translateY(0) scale(1)";

    });

});


// ==========================
// Welcome Message
// ==========================

window.onload = function () {

    console.log("Welcome to Gayatri Sagar Patil's Landing Page!");

};