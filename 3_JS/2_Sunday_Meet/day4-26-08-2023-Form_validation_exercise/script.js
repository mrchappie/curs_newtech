const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const age = document.getElementById('age');
const submit = document.getElementById('submit');

const firstNameError = document.getElementById('firstname_error');
const lastNameError = document.getElementById('lastname_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');
const confirmPasswordError = document.getElementById('confirm_password_error');
const ageError = document.getElementById('age_error');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (firstName.value.length < 3) {
    firstNameError.style.visibility = 'visible';
  } else {
    firstNameError.style.visibility = 'hidden';
  }
  if (lastName.value.length < 3) {
    lastNameError.style.visibility = 'visible';
  } else {
    lastNameError.style.visibility = 'hidden';
  }
  console.log(password.value);
  console.log(confirmPassword.value);
  if (
    password.value.length < 8 &&
    confirmPassword.value.length < 8 &&
    password.value != confirmPassword.value
  ) {
    passwordError.style.visibility = 'visible';
    confirmPasswordError.style.visibility = 'visible';
    passwordError.textContent = 'ERROR';
    confirmPasswordError.textContent = 'ERROR';
  }
  if (
    password.value.length >= 8 &&
    confirmPassword.value.length >= 8 &&
    password.value === confirmPassword.value
  ) {
    passwordError.style.visibility = 'visible';
    confirmPasswordError.style.visibility = 'visible';
    passwordError.textContent = 'Password ok';
    confirmPasswordError.textContent = 'Password ok';
  }
});
