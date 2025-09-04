// Select hamburger icon and nav menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar ul');

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});