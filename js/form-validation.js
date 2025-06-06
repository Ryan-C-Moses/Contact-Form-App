// Gather form elements
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const queryType = document.getElementById("query-type");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const [querytype1, querytype2] = queryType.children[1].children;

const fNameErr = document.getElementById("fname-error");
const lNameErr = document.getElementById("lname-error");
const emailErr = document.getElementById("email-error");

const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const registerEventListeners = () => {
  fname.addEventListener("input", (evt) =>
    validate(nameRegex, fname, fNameErr)
  );
  lname.addEventListener("input", (evt) =>
    validate(nameRegex, lname, lNameErr)
  );
  email.addEventListener("input", (evt) =>
    validate(emailRegex, email, emailErr)
  );
  message.addEventListener("input", (evt) => {
    const input = evt.target.value;
    if (input < 1) {
      document.getElementById("message-error").style.display = "block";
      el.classList.add("error-input");
    }
  });
};

const validateForm = (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Validate form fields
  validateFirstNameChange();
  validateLastNameChange();
  validateEmailChange();
  validateQueryTypeChange();
  validateMessageChange();
  validateConsentChange();

  const checkForm = isFormValid(fname, lname, email, message, consent);

  // Check if the form is valid before submitting
  if (checkForm) {
    // If valid, submit the form
    showSuccessMessaage();
    hideSuccessMessage();
  }

  console.log("form submitted");
};

const isFormValid = (fname, lname, email, message, consent) => {
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

const validateFirstNameChange = () => {
  validate(nameRegex, fname, fNameErr);
};

const validateLastNameChange = () => {
  validate(nameRegex, lname, lNameErr);
};

const validateEmailChange = () => {
  validate(emailRegex, email, emailErr);
};

const validateQueryTypeChange = () => {
  if (!(generalEnquiry.checked || supportRequest.checked)) {
    document.getElementById("query-type-error").style.display = "block";
    querytype1.classList.add("error-input");
    querytype2.classList.add("error-input");
  }
};

const validateMessageChange = () => {
  if (message.value.length < 1) {
    document.getElementById("message-error").style.display = "block";
    message.classList.add("error-input");
  }
};

const validateConsentChange = () => {
  if (!consent.checked) {
    document.getElementById("consent-error").style.display = "block";
  }
};

const validate = (regex, el, err) => {
  console.log(el.value);
  if (regex.test(el.value)) {
    err.style.display = "none";
    el.classList.remove("error-input");
  } else {
    err.style.display = "block";
    el.classList.add("error-input");
  }
};

export default validateForm;
