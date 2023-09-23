import HandleLocalStorage from './classes/HandleLocalStorage.js';
import Utils from './classes/Utils.js';
import routes from './dataBase/routes.js';

const handleStorage = new HandleLocalStorage();
const utils = new Utils();

const logOutBtn = document.getElementById('logOut');

logOutBtn.addEventListener('click', () => {
  handleStorage.updateLoggedUser('');
  handleStorage.updateUsers();
  utils.redirectToNewPage(routes.logInPage[0], routes.logInPage[1]);
});

window.addEventListener('load', () => {
  console.log(handleStorage.retriveLoggedUser());
});
