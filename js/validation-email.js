// ! f валидации firstName и LastName
const DOM = document;
let REG =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (fieldName, fieldNameValue) => {
  let isValidField = true;
  let errorField = DOM.getElementById(
    `js-registration-form-${fieldName}-error`
  );

  if (!fieldNameValue) {
    errorField.innerText = 'Please type your email';
    isValidField = false;
  } else if (REG.test(String(fieldNameValue).toLowerCase()) != 1) {
    errorField.innerText = 'saaad';
    isValidField = false;
  }
  return isValidField;
};

export { validateEmail };
