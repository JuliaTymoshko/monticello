// ! f валидации firstName и LastName
const DOM = document;

const validateNames = (fieldName, fieldNameValue) => {
  let isValidField = true;
  let errorField = DOM.getElementById(
    `js-registration-form-${fieldName}-error`
  );

  if (!fieldNameValue) {
    errorField.innerText = 'Please type in smth';
    isValidField = false;
  } else if (fieldNameValue.length <= 1) {
    errorField.innerText = 'Should be 1+ characters';
    isValidField = false;
  } else if (fieldNameValue.length >= 30) {
    errorField.innerText = 'Should be less than 30 characters';
    isValidField = false;
  } else if (fieldNameValue.search(/\d/) != -1) {
    errorField.innerText = 'No numbers allowed.';
    isValidField = false;
  } else if (fieldNameValue.search(/[\,\.\$\%\+\}\{\^\-\*\/\&]/) != -1) {
    errorField.innerText = 'No special characters allowed.';
    isValidField = false;
  }
  return isValidField;
};

export { validateNames };
