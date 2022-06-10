import { validateNames } from './validation.js';
import { validateEmail } from './validation-email.js';
import { toggleModal } from './modal-window.js';
import { setError } from './set-error.js';

const DOM = document;

// ! Registration f start
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

  // ! Запуск f валидации
  let isFormValid = true;

  let isFirstNameValid = validateNames('firstName', firstName);
  let isLastNameValid = validateNames('lastName', lastName);
  let isEmailValid = validateEmail('email', email);

  // ! Проверка пустоты и валидности ДВУХ полей
  if (
    !isFirstNameValid ||
    !isLastNameValid ||
    !isEmailValid ||
    email === '' ||
    username === '' ||
    password === ''
  ) {
    isFormValid = false;
  }

  // ! Проверка на вадидность формы, если нет - fetch не пойдет
  if (!isFormValid) {
    return;
  }

  // ! Собираем обьект на отправку (we can trim() strings here as well)
  const body = {
    role: 2,
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    password: password,
    disabledSeasonAnimation: true,
    language: 'ua',
  };

  // ! Спросить Виталика

  for (let key in body) {
    if (typeof body[key] === 'string') {
      body[key] = body[key].trim();
    }
  }

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

      const showServerError = (fieldName) => {
        let errorField = DOM.getElementById(
          `js-registration-form-${fieldName}-error`
        );
        errorField.innerText = response.message['en'];
      };

      if (
        response.message['en'] ===
        'A user is already registered under this email'
      ) {
        showServerError('email');
      }

      if (response.message['en'] === 'This nickname is already taken') {
        showServerError('username');
      }

      if (response.message['en'] === 'User added') {
        const notificationArea = DOM.getElementById(
          'js-registration-notification'
        );

        notificationArea.innerText =
          response.message['en'] || 'Successfully registered!';

        toggleModal();
      }
    });

  // ! End of request (registration f)
};

// ! Export
export { registration };
