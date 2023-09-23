import HandleLocalStorage from './classes/HandleLocalStorage.js';
import Utils from './classes/Utils.js';
import Register from './classes/Register.js';
import LogIn from './classes/Login.js';
import routes from './dataBase/routes.js';

const handleStorage = new HandleLocalStorage();
const utils = new Utils();

// LOG IN inputs
const logInForm = document.getElementById('login__form');
const logInUserName = document.getElementById('login__form__username__input');
const logInPassword = document.getElementById('login__form__password__input');
const logInButton = document.getElementById('login__form__button');
const logInInputsArray = document.querySelectorAll('#login__form input');

// SIGN UP inputs
const signUpForm = document.getElementById('signup__form');
const signUpEmail = document.getElementById('signup__form__email__input');
const signUpFirstName = document.getElementById(
  'signup__form__firstname__input'
);
const signUpLastName = document.getElementById('signup__form__lastname__input');
const signUpUserName = document.getElementById('signup__form__username__input');
const signUpAge = document.getElementById('signup__form__age__input');
const signUpPassword = document.getElementById('signup__form__password__input');
const signUpButton = document.getElementById('signup__form__button');
const sigInInputsArray = document.querySelectorAll('#signup__form input');

// FORM overlay
const overlayButton = document.getElementById('login__overlay__button');
const overlayElementContainer = document.getElementById('login__overlay');
const overlayDescription = document.getElementById(
  'login__overlay__description'
);
const logInElContainer = document.getElementById('login');
const signUpElContainer = document.getElementById('signup');

window.addEventListener('load', () => {
  const getLoggedUser = handleStorage.retriveUsers()?.loggedUser;

  if (getLoggedUser) {
    utils.redirectToNewPage(routes.homePage[0], routes.homePage[1]);
  }
});

// const userInput = {
//   email: signUpEmail.value,
//   firstName: signUpFirstName.value,
//   lastName: signUpLastName.value,
//   userName,
//   age: signUpAge.value,
//   password: signUpPassword.value,
// };

// Form validation

// TODO validation logic is not perfect
let response = false;
function handleInputValidation(formInput, button) {
  formInput.addEventListener('input', () => {
    response = utils.validateUserInput(
      formInput.type,
      formInput.value,
      formInput.parentElement
    );

    //!
    if (signUpFirstName && signUpLastName) {
      signUpUserName.value = signUpFirstName.value + '.' + signUpLastName.value;
    }

    if (!response) {
      button.setAttribute('disabled', '');
      return;
    } else {
      button.removeAttribute('disabled');
    }
  });
}

// Sign up validation
sigInInputsArray.forEach((formInput) => {
  handleInputValidation(formInput, signUpButton);
});

// Log in validation
logInInputsArray.forEach((formInput) => {
  handleInputValidation(formInput, logInButton);
});

/* The code snippet is adding an event listener to the signUpForm element for the 'submit' event. When the form is submitted, the event listener callback function is executed and
a new user is added to the database. */

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!response) return;

  const userName =
    signUpFirstName.value.toLowerCase() +
    '.' +
    signUpLastName.value.toLowerCase();

  const register = new Register(
    signUpEmail.value,
    signUpFirstName.value,
    signUpLastName.value,
    userName,
    signUpAge.value,
    signUpPassword.value
  );

  register.addNewUser();
});

/* The code snippet is adding an event listener to the `logInForm` element for the 'submit' event. When the form is submitted, the event listener callback function is executed and the user is logged in his account. */
logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const login = new LogIn(logInUserName.value, logInPassword.value);

  login.verifyUser();
});

overlayButton.addEventListener('click', () => {
  overlayElementContainer.classList.toggle('show__signup');

  if (overlayElementContainer.classList.contains('show__signup')) {
    overlayButton.textContent = 'SIGN IN';
    overlayDescription.textContent =
      '"Join the guardians of the online realm."';

    logInElContainer.style = 'width: 30%; opacity: 0';
    signUpElContainer.style = 'width: 70%; opacity: 1';

    // width: 30%; opacity: 0;
  } else {
    overlayButton.textContent = 'SIGN UP';

    overlayDescription.textContent =
      '"Unlock the door to your digital fortress."';

    logInElContainer.style = 'width: 70%; opacity: 1';
    signUpElContainer.style = 'width: 30%; opacity: 0';
  }
});
