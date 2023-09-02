const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const submit = document.getElementById('submit');

const firstNameError = document.getElementById('firstname_error');
const lastNameError = document.getElementById('lastname_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');
const confirmPasswordError = document.getElementById('confirm_password_error');

const signUpEl = document.getElementById('sign__up');
const logInEl = document.getElementById('log__in');
const showLogInBtn = document.getElementById('show__log__in');

const emailLogInInput = document.getElementById('email__login');
const passwordLogInInput = document.getElementById('password__login');
const logInBtn = document.getElementById('log__in__btn');

let isLogInActive = false;

showLogInBtn.addEventListener('click', () => {
  if (!isLogInActive) {
    isLogInActive = true;
    signUpEl.style.display = 'none';
    logInEl.style.display = 'block';
    showLogInBtn.textContent = 'Sign Up';
  } else {
    isLogInActive = false;
    signUpEl.style.display = 'block';
    logInEl.style.display = 'none';
    showLogInBtn.textContent = 'Already have an account?';
  }
});

const users = JSON.parse(localStorage.getItem('users')) || [];

function generateRandomId(min = 10000000, max = 20000000) {
  const id = Math.floor(Math.random() * (max - min) + min);
  return id;
}

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (firstName.value.length < 3) {
    firstNameError.style.visibility = 'visible';
    return;
  } else {
    firstNameError.style.visibility = 'hidden';
  }
  if (lastName.value.length < 3) {
    lastNameError.style.visibility = 'visible';
    return;
  } else {
    lastNameError.style.visibility = 'hidden';
  }

  if (!email.value.includes('@')) {
    emailError.style.visibility = 'visible';
    return;
  } else if (users.find((user) => user.email === email.value)) {
    emailError.style.visibility = 'visible';
    emailError.textContent = 'Email already exists!';
    return;
  } else {
    emailError.style.visibility = 'hidden';
  }

  if (
    password.value.length >= 4 &&
    confirmPassword.value.length >= 4 &&
    password.value === confirmPassword.value
  ) {
    passwordError.style.visibility = 'visible';
    confirmPasswordError.style.visibility = 'visible';
    passwordError.textContent = 'Password ok';
    confirmPasswordError.textContent = 'Password ok';
  } else {
    alert('Password is not ok!');
    return;
  }

  const user = {};

  user.firsName = firstName.value;
  user.lastName = lastName.value;
  user.email = email.value;
  user.password = password.value;
  user.confirmPassword = confirmPassword.value;
  user.id = generateRandomId();

  users.push(user);
  saveLocalStorage();
  alert('Your account was created!');
});

function saveLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

logInBtn.addEventListener('click', () => {
  const user = users.find((user) => {
    if (
      user.email.toLowerCase() === emailLogInInput.value.toLowerCase() &&
      user.password === passwordLogInInput.value
    ) {
      return user;
    }
  });

  if (user) {
    alert('Logged in');
  } else {
    alert('Wrong email or password');
  }
});
