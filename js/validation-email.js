// ! f валидации firstName и LastName
const DOM = document;
const EMAIL_REGEXP = /@.-_/;

const validateEmail = (fieldName, fieldNameValue) => {
  let isValidField = true;
  let errorField = DOM.getElementById(
    `js-registration-form-${fieldName}-error`
  );

  if (!fieldNameValue) {
    errorField.innerText = 'Please type your email';
    isValidField = false;
  } else if (fieldNameValue.search(EMAIL_REGEXP) != -1) {
    errorField.innerText = 'saaad';
    isValidField = false;
  }
  return isValidField;
};

export { validateEmail };
