'use strict';

import { form, onFormSubmit } from "./form-validation.js";
import registerEventComponents from "./bootstrap.js";

registerEventComponents();
form.addEventListener("submit", onFormSubmit);
