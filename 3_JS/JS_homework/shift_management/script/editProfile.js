import HandleLocalStorage from './classes/HandleLocalStorage.js';
import Utils from './classes/Utils.js';
import routes from './dataBase/routes.js';

const handleStorage = new HandleLocalStorage();
const utils = new Utils();
const loggedUserId = handleStorage.retriveUsers()?.loggedUser;
const loggedUserData = handleStorage
  .retriveUsers()
  .users.find((user) => user.id === loggedUserId);

// DOM elements
const saveNewUserInfoButton = document.getElementById('edit__profile__button');

const editProfileEmailInput = document.getElementById(
  'edit__profile__email__input'
);
const editProfileFirstNameInput = document.getElementById(
  'edit__profile__firstname__input'
);
const editProfileLastNameInput = document.getElementById(
  'edit__profile__lastname__input'
);
const editProfileUsernameInput = document.getElementById(
  'edit__profile__username__input'
);
const editProfileAgeInput = document.getElementById(
  'edit__profile__age__input'
);
const editProfilePasswordInput = document.getElementById(
  'edit__profile__password__input'
);

/* The `window.addEventListener('load', () => { ... })` code block is adding an event listener to the
`window` object for the 'load' event. This event is fired when the entire page and its resources
(such as images and scripts) have finished loading. It checks if it a user was logged in, if it was not, it call redirectToNewPage() function and redirects the user to log in page */
window.addEventListener('load', () => {
  !loggedUserId
    ? utils.redirectToNewPage(routes.logInPage[0], routes.logInPage[1])
    : null;

  if (loggedUserData) {
    editProfileEmailInput.value = loggedUserData.email;
  }
});

saveNewUserInfoButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(loggedUserData);
});
