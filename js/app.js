import validateForm from './form-validation.js';

// variables
const form = document.getElementById("contact-form-id");

// Ensure the DOM is fully loaded before setting up form validation
document.addEventListener('DOMContentLoaded', () => {
  // Call the validateForm function to set up form validation
  // validateForm();
});

form.addEventListener("submit", validateForm)