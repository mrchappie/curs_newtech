import HandleLocalStorage from './HandleLocalStorage.js';
import Utils from './Utils.js';
import routes from '../dataBase/routes.js';

const handleStorage = new HandleLocalStorage();
const utils = new Utils();

class LogIn {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  verifyUser() {
    const usernameValidation = handleStorage
      .retriveUsers()
      ?.users.find((user) => {
        if (
          user.userName === this.userName &&
          utils.decryptPassword(user.password) === this.password
        )
          return user;
      });

    if (usernameValidation) {
      handleStorage.updateLoggedUser(usernameValidation.id);
      handleStorage.updateUsers();

      // alert('user logged in');

      utils.redirectToNewPage(routes.homePage[0], routes.homePage[1]);
    } else {
      alert('user not found');
    }
  }
}

export default LogIn;
