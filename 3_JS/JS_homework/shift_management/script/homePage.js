import HandleLocalStorage from './classes/HandleLocalStorage.js';
import Utils from './classes/Utils.js';
import routes from './dataBase/routes.js';

const handleStorage = new HandleLocalStorage();
const utils = new Utils();
const loggedUserId = handleStorage.retriveUsers()?.loggedUser;

const shiftsContainerEl = document.getElementById('shifts__table__list');

/* The `window.addEventListener('load', () => { ... })` code block is adding an event listener to the
`window` object for the 'load' event. This event is fired when the entire page and its resources
(such as images and scripts) have finished loading. It checks if it a user was logged in, if it was not, it call redirectToNewPage() function and redirects the user to log in page */
window.addEventListener('load', () => {
  !loggedUserId
    ? utils.redirectToNewPage(routes.logInPage[0], routes.logInPage[1])
    : null;

  displayLoggedUserData();
});

/**
 * The function displays the first name of the logged-in user and creates shifts for that user.
 */
function displayLoggedUserData() {
  const shifts = handleStorage.retrieveShifts()[loggedUserId];
  shifts?.forEach((shift) => utils.createShift(shift, shiftsContainerEl));

  if (shifts.length != 0) {
    const shiftsTableListHeading = document.getElementById(
      'shifts__table__list__heading'
    );
    shiftsTableListHeading.style.display = 'none';
  }
}
