const validateForm = () => {
  const form = document.getElementById("contact-form-id");
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Custom validation logic
    const fname = document.getElementById("first-name");
    const lname = document.getElementById("last-name");
    const email = document.getElementById("email");
    const queryType = document.getElementById("query-type");
    const message = document.getElementById("message");
    const consent = document.getElementById("consent");

    if (!fname.checkValidity()) {
      // Set a custom validation message if the first name is invalid
      fname.setCustomValidity("Please enter a valid text.");
    } else {
      // Clear the custom validation message if the first name is valid
      fname.setCustomValidity("");
    }

    // Check if the form is valid before submitting
    if (this.checkValidity()) {
      this.submit();
    }
  });
};

export default validateForm;
