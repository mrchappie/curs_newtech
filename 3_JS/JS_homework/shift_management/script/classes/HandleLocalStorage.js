class HandleLocalStorage {
  constructor() {
    this.usersDataBase = this.retriveUsers() || {
      loggedUser: '',
      users: [],
    };

    this.shiftsDataBase = this.retrieveShifts() || {};
  }

  updateLoggedUser(loggedUserId) {
    this.usersDataBase.loggedUser = loggedUserId;
    // this.usersDataBase.users = [
    //   ...this.usersDataBase.users,
    //   ...this.retriveUsers().users,
    // ];
    // this.updateUsers();
  }

  retriveLoggedUser() {
    return JSON.parse(localStorage.getItem('shiftAppUsers'));
  }

  retriveUsers() {
    return JSON.parse(localStorage.getItem('shiftAppUsers'));
  }

  retrieveShifts() {
    return JSON.parse(localStorage.getItem('shiftAppUsersShifts'));
  }

  updateUsers(user, data = this.usersDataBase) {
    if (user) this.usersDataBase.users.push(user);
    localStorage.setItem('shiftAppUsers', JSON.stringify(data));
  }

  updateShifts(data = this.shiftsDataBase) {
    localStorage.setItem('shiftAppUsersShifts', JSON.stringify(data));
  }
}

export default HandleLocalStorage;
