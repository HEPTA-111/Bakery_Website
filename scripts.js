// scripts.js

// Function to handle form submission and validation
function handleFormSubmission(event, formType) {
    event.preventDefault();
    let isValid = true;
    const form = event.target;
    
    // Example validation for different forms
    if (formType === 'contact') {
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            isValid = false;
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }
    } else if (formType === 'application') {
        // Similar validation for application form if needed
        // Example for the application form
        const name = form.querySelector('input[name="applicant-name"]').value;
        const email = form.querySelector('input[name="applicant-email"]').value;
        const coverLetter = form.querySelector('textarea[name="cover-letter"]').value;
        const resume = form.querySelector('input[name="resume"]').files.length;
        
        if (!name || !email || !coverLetter || resume === 0) {
            isValid = false;
            alert('Please fill out all fields and attach your resume.');
        } else if (!validateEmail(email)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
}

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form event listeners
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmission(e, 'contact'));
    }
    
    const applicationForm = document.querySelector('form.application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => handleFormSubmission(e, 'application'));
    }
});
