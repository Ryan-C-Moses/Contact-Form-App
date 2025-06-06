'use strict';

import { form, validateForm } from "./form-validation.js";
import registerEventComponents from "./bootstrap.js";

registerEventComponents();
form.addEventListener("submit", validateForm);
