import users from 'data/users.json';

const localStorageSetter = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const localStorageGetter = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const validateUser = (email, password) => {
  const validateEmail = users.find((user) => user.email === email);
  const validatePassword = users.find((user) => user.password === password);

  const validateResult = {
    email: !validateEmail ? 'Email is not registered' : true,
    password: !validatePassword ? 'Password is not correct' : true,
  };

  return validateResult;
};

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};

export {
  localStorageSetter,
  localStorageGetter,
  validateUser,
  waitFor,
  debounce,
};
