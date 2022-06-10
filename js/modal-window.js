const DOM = document;

// ! Toggle modal window
const modalWindow = DOM.getElementById('js-registration-modal');
function toggleModal() {
  modalWindow.classList.toggle('hidden');
}

export { toggleModal };
