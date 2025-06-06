// Initial Logic to Validate the Form

const validateForm = (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Gather form elements
  const fname = document.getElementById("first-name");
  const lname = document.getElementById("last-name");
  const email = document.getElementById("email");
  const queryType = document.getElementById("query-type");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");

  // Validate form fields
  validateFirstNameChange(fname);
  validateLastNameChange(lname);
  validateEmailChange(email);
  validateQueryTypeChange(queryType);
  validateMessageChange(message);
  validateConsentChange(consent);

  const checkForm = isFormValid(
    fname,
    lname,
    email,
    queryType,
    message,
    consent
  );

  // Check if the form is valid before submitting
  if (checkForm) {
    // If valid, submit the form
    showSuccessMessaage();
    hideSuccessMessage();
  }

  console.log("form submitted");
};

const isFormValid = (fname, lname, email, queryType, message, consent) => {
  const generalEnquiry = document.getElementById("general-enquiry");
  const supportRequest = document.getElementById("support-request");

  const fnameValid = /^[A-Za-z]+$/.test(fname.value);
  const lnameValid = /^[A-Za-z]+$/.test(lname.value);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  const queryTypeValid = generalEnquiry.checked || supportRequest.checked;
  const messageValid = message.value.trim().length > 0;
  const consentValid = consent.checked;

  return (
    fnameValid &&
    lnameValid &&
    emailValid &&
    queryTypeValid &&
    messageValid &&
    consentValid
  );
};

const showSuccessMessaage = () => {
  // Select the template
  const template = document.getElementById("modal-template");

  // Clone the content
  const modalClone = template.content.cloneNode(true);

  // Append the cloned content to the body or another container
  document.body.append(modalClone);
};

const hideSuccessMessage = () => {
  // Select the template
  const modal = document.querySelector("div.modal.centered");

  setTimeout(() => {
    modal.remove();
  }, 4000);
};

const validateFirstNameChange = (el) => {
  const regex = /^[A-Za-z]+$/;
  const err = document.getElementById("fname-error");

  el.addEventListener("input", () => validate(regex, el, err));
  validate(regex, el, err); // Initial validation check
};

const validateLastNameChange = (el) => {
  const regex = /^[A-Za-z]+$/;
  const err = document.getElementById("lname-error");

  el.addEventListener("input", () => validate(regex, el, err));
  validate(regex, el, err); // Initial validation check
};

const validateEmailChange = (el) => {
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

const validateQueryTypeChange = (el) => {
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

const validateMessageChange = (el) => {
  if (el.value.length < 1) {
    document.getElementById("message-error").style.display = "block";
    el.classList.add("error-input");
  }

  el.addEventListener("input", (evt) => {
    const input = evt.target.value;
    if (input < 1) {
      document.getElementById("message-error").style.display = "block";
      el.classList.add("error-input");
    }
  });
};

const validateConsentChange = (el) => {
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
