"use strict";

import submitForm from "./api.js";

// Gather form elements
export const form = document.getElementById("contact-form-id");
export const fName = document.getElementById("first-name");
export const lName = document.getElementById("last-name");
export const email = document.getElementById("email");
export const message = document.getElementById("message");
export const consent = document.getElementById("consent");
export const queryTypes = document.querySelectorAll('input[name="query-type"]');
export const generalEnquiry = document.getElementById("general-enquiry");
export const supportRequest = document.getElementById("support-request");
export const queryType = document.getElementById("query-type");
export const [queryType1, queryType2] = queryType.children[1].children;

export const fNameErr = document.getElementById("fname-error");
export const lNameErr = document.getElementById("lname-error");
export const emailErr = document.getElementById("email-error");
export const queryErr = document.getElementById("query-type-error");
export const messageErr = document.getElementById("message-error");
export const consentErr = document.getElementById("consent-error");

export const nameRegex = /^[A-Za-z]+$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onFormSubmit = async (event) => {
  // Prevent the default form submission
  event.preventDefault();

  try {
    // Validate form fields
    validateFirstName();
    validateLastName();
    validateEmail();
    validateQueryType();
    validateMessage();
    validateConsent();

    const checkForm = isFormValid(fName, lName, email, message, consent);

    // Check if the form is valid before submitting
    if (checkForm) {
      await submitForm(form);

      showSuccessMessaage();
      hideSuccessMessage();
      clearForm();
    }
  } catch (error) {
    console.error(error.message);
    console.error(error);
  }
};

const isFormValid = (fName, lName, email, message, consent) => {
  const generalEnquiry = document.getElementById("general-enquiry");
  const supportRequest = document.getElementById("support-request");

  const fNameValid = /^[A-Za-z]+$/.test(fName.value);
  const lNameValid = /^[A-Za-z]+$/.test(lName.value);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  const queryTypeValid = generalEnquiry.checked || supportRequest.checked;
  const messageValid = message.value.trim().length > 0;
  const consentValid = consent.checked;

  return (
    fNameValid &&
    lNameValid &&
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

const validateFirstName = () => {
  validateOnSubmit(nameRegex, fName, fNameErr);
};

const validateLastName = () => {
  validateOnSubmit(nameRegex, lName, lNameErr);
};

const validateEmail = () => {
  validateOnSubmit(emailRegex, email, emailErr);
};

const validateQueryType = () => {
  if (!(generalEnquiry.checked || supportRequest.checked)) {
    queryErr.style.display = "block";
    queryType1.classList.add("error-input");
    queryType2.classList.add("error-input");
  }
};

const validateMessage = () => {
  if (message.value.length < 1) {
    messageErr.style.display = "block";
    message.classList.add("error-input");
  }
};

const validateConsent = () => {
  if (!consent.checked) {
    consentErr.style.display = "block";
  }
  consent.value = true;
};

const validateOnSubmit = (regex, el, err) => {
  if (regex.test(el.value)) {
    err.style.display = "none";
    el.classList.remove("error-input");
  } else {
    err.style.display = "block";
    el.classList.add("error-input");
  }
};

const clearForm = () => {
  fName.value = "";
  lName.value = "";
  email.value = "";
  generalEnquiry.checked = false;
  supportRequest.checked = false;
  message.value = "";
  consent.checked = false;
};
