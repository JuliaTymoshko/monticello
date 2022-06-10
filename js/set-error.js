const DOM = document;

const setError = (id, error) => {
  const el = DOM.getElementById(id);
  error ? el.classList.add('error') : el.classList.remove('error');
};

export { setError };
