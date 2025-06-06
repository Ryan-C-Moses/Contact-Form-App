"use strict";

import {
  fname,
  lname,
  email,
  message,
  queryTypes,
  queryType1,
  queryType2,
  consent,
  fNameErr,
  lNameErr,
  emailErr,
  queryErr,
  messageErr,
  consentErr,
  nameRegex,
  emailRegex,
} from "./form-validation.js";

const registerEventComponents = () => {
  fname.addEventListener("input", (evt) => {
    validateOnChange(nameRegex, evt, fname, fNameErr);
  });
  lname.addEventListener("input", (evt) =>
    validateOnChange(nameRegex, evt, lname, lNameErr)
  );
  email.addEventListener("input", (evt) =>
    validateOnChange(emailRegex, evt, email, emailErr)
  );
  message.addEventListener("input", (evt) => {
    const input = evt.target.value;
    if (input.length < 1) {
      messageErr.style.display = "block";
      message.classList.add("error-input");
    }

    if (input.length > 1) {
      messageErr.style.display = "none";
      message.classList.remove("error-input");
    }
  });

  consent.addEventListener("change", (evt) => {
    if (evt.target.checked) {
      consentErr.style.display = "none";
    }
  });

  handleQueryChange();
};

const handleQueryChange = () => {
  const arr = Array.from(queryTypes);
  for (const query of arr) {
    query.addEventListener("change", (evt) => {
      if (evt.target.checked) {
        queryErr.style.display = "none";
        queryType1.classList.remove("error-input");
        queryType2.classList.remove("error-input");
      }
    });
  }
};

const validateOnChange = (regex, evt, el, err) => {
  const userInput = evt.target.value.trim();
  if (regex.test(userInput)) {
    err.style.display = "none";
    el.classList.remove("error-input");
  } else {
    err.style.display = "block";
    el.classList.add("error-input");
  }
};

export default registerEventComponents;
