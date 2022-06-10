const DOM = document;

const burgerButton = DOM.getElementById('js-burger-button');
const burgerMenu = DOM.getElementById('js-burger-menu');

const showModal = () => {
  burgerMenu.style.display = 'block';
};
const hideModal = () => {
  burgerMenu.style.display = 'none';
};

burgerButton.addEventListener('click', showModal);
burgerMenu.addEventListener('click', hideModal);
