import './js/header-circles.js';
import { registration } from './js/registration.js';
import './js/slider.js';

const DOM = document;

DOM.getElementById('js-registration-form').addEventListener(
  'submit',
  registration
);
