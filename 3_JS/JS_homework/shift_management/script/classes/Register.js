import Utils from './Utils.js';
import HandleLocalStorage from './HandleLocalStorage.js';
import routes from '../dataBase/routes.js';

const utils = new Utils();
const handleStorage = new HandleLocalStorage();

class Register {
  constructor(email, firstName, lastName, userName, age, password) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.age = age;
    this.password = password;
  }

  addNewUser() {
    const user = {
      id: utils.generateId(),
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      age: this.age,
      password: utils.encryptPassword(this.password),
    };

    handleStorage.updateLoggedUser(user.id);
    handleStorage.updateUsers(user);

    utils.redirectToNewPage(routes.homePage[0], routes.homePage[1]);
  }
}

export default Register;
