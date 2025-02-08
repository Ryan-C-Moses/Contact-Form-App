// Initial Logic to Validate the Form

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

    // Validate the first name
    handleFirstNameChange(fname);
    handleLastNameChange(lname);
    handleEmailChange(email);
    handleQueryTypeChange(queryType);
    handleMessageChange(message);
    handleConsentChange(consent);

    // Check if the form is valid before submitting
    if (true) {
      this.submit();
    }
  });
};

const handleFirstNameChange = (el) => {
  const regex = /^[A-Za-z]+$/;
  const err = document.getElementById("fname-error");

  el.addEventListener("input", () => validate(regex, el, err));
  validate(regex, el, err); // Initial validation check
};

const handleLastNameChange = (el) => {
  const regex = /^[A-Za-z]+$/;
  const err = document.getElementById("lname-error");

  el.addEventListener("input", () => validate(regex, el, err));
  validate(regex, el, err); // Initial validation check
};

const handleEmailChange = (el) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const err = document.getElementById("email-error");

  const validateEmail = (e) => {
    if (regex.test(e.target.value)) {
      err.style.display = "none";
      el.classList.remove("error-input");
    } else {
      err.style.display = "block";
      el.classList.add("error-input");
    }
  };

  el.addEventListener("change", validateEmail);
  validate(regex, el, err); // Initial validation check
};

const handleQueryTypeChange = (el) => {
  const generalEnquiry = document.getElementById("general-enquiry");
  const supportRequest = document.getElementById("support-request");

  const div1 = el.children[1];
  const div2 = el.children[2];

  if (!(generalEnquiry.checked || supportRequest.checked)) {
    document.getElementById("query-type-error").style.display = "block";
    div1.classList.add("error-input");
    div2.classList.add("error-input");
  }
};

const handleMessageChange = (el) => {
    if (el.value.length < 1) {
      document.getElementById("message-error").style.display = "block";
      el.classList.add("error-input");
    }
};

const handleConsentChange = (el) => {
    if (!el.checked) {
        document.getElementById("consent-error").style.display = "block";
    }
};

const validate = (regex, el, err) => {
  if (regex.test(el.value)) {
    err.style.display = "none";
    el.classList.remove("error-input");
  } else {
    err.style.display = "block";
    el.classList.add("error-input");
  }
};

export default validateForm;
