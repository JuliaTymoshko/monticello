import './js/header-circles.js';
import { registration } from './js/registration.js';
import './js/slider.js';
import { toggleModal } from './js/modal-window.js';
import './js/burger.js';

const DOM = document;

DOM.getElementById('js-registration-form').addEventListener(
  'submit',
  registration
);

// !
const closeButton = DOM.getElementById('js-registration-ok');
closeButton.addEventListener('click', toggleModal);
