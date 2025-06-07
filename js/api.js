"use strict";

const submitForm = async (form) => {
  try {
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    const response = await fetch("http://localhost:3000/", options);

    console.info("form submitted " + response.status + " " + response.statusText);
  } catch (error) {
    console.error(error);
  }
};

export default submitForm;
