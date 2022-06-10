const DOM = document;

const setError = (id, error) => {
  const el = DOM.getElementById(id);
  error ? el.classList.add('error') : el.classList.remove('error');
};

const registration = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  const getElementIdByName = (name) => `js-registration-form-${name}`;

  const firstName = form.get('firstName');
  setError(getElementIdByName('firstName'), !firstName);

  const lastName = form.get('lastName');
  setError(getElementIdByName('lastName'), !lastName);

  const email = form.get('email');
  setError(getElementIdByName('email'), !email);

  const username = form.get('username');
  setError(getElementIdByName('username'), !username);

  const password = form.get('password');
  setError(getElementIdByName('password'), !password);

  // ! Проверка валидности полей
  let isFormValid = true;

  // ! проверка firstName
  const nameErrorField = DOM.getElementById(
    'js-registration-form-firstName-error'
  );

  if (!firstName) {
    nameErrorField.innerText = 'Please type in your name';
    isFormValid = false;
  } else if (firstName.length <= 1) {
    nameErrorField.innerText = 'Your name should be 1+ characters';
    isFormValid = false;
  } else if (firstName.length >= 30) {
    nameErrorField.innerText = 'Your name less than 30 characters';
    isFormValid = false;
  } else if (firstName.search(/\d/) != -1) {
    nameErrorField.innerText = 'No numbers allowed.';
    isFormValid = false;
  } else if (firstName.search(/[\,\.\&\%\+\}\{\^\-\*\/\&]/) != -1) {
    nameErrorField.innerText = 'No special characters allowed.';
    isFormValid = false;
  } else {
    // TODO: removeElement (nameErrorField.innerText)
    // nameErrorField.remove
  }

  if (!isFormValid) {
    return;
  }

  // ! проверка lastName
  const lastNameErrorField = DOM.getElementById(
    'js-registration-form-lastName-error'
  );

  if (!lastName) {
    lastNameErrorField.innerText = 'Please type in your last name';
    isFormValid = false;
  } else if (lastName.length <= 1) {
    lastNameErrorField.innerText = 'Your last name should be 1+ characters';
    isFormValid = false;
  } else if (lastName.length >= 50) {
    lastNameErrorField.innerText = 'Your last name less than 50 characters';
    isFormValid = false;
  } else if (lastName.search(/\d/) != -1) {
    lastNameErrorField.innerText = 'No numbers allowed.';
    isFormValid = false;
  } else if (lastName.search(/[\,\.\&\%\+\}\{\^\-\*\/\&]/) != -1) {
    lastNameErrorField.innerText = 'No special characters allowed.';
    isFormValid = false;
  }

  if (!isFormValid) {
    return;
  }

  // ! Проверка пустоты
  if (email === '' || username === '' || password === '') {
    isFormValid = false;
  }

  if (!isFormValid) {
    return;
  }

  // ! Собираем обьект на отправку
  const body = {
    role: 2,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    username: username.trim(),
    password: password.trim(),
    disabledSeasonAnimation: true,
    language: 'ua',
  };

  // ! Send request - return выкенет из всей f и не пойдет дальше fetch. Но если будут необяз поля и из юзер оставит пустыми, все сломается

  fetch(
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((response) => {
      // console.log(response); // ! response = object
      // console.log(response.message); // ! message = object
      console.log(response.message['en']); // ! message = object

      const emailErrorField = DOM.getElementById(
        'js-registration-form-email-error'
      );
      emailErrorField.innerText = response.message['en'];
    });

  // ! End of request (registration f)
};

// ! Export
export { registration };
