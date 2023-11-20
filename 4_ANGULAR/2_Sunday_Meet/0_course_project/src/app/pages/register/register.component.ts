import { Component } from '@angular/core';
import { HandleDataBase } from 'src/app/utils/helpers/handleDataBase.service';

export interface UserObject {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private handleDataBase: HandleDataBase) {}

  userData: UserObject = {
    firstName: 'Alex',
    lastName: 'M',
    email: 'alex@mail.com',
    password: '1234',
    confirmPassword: '1234',
  };

  // users: string[] = [];

  saveUserData() {
    const usersFromDB: UserObject[] =
      this.handleDataBase.getDataFromDB('users');

    if (this.handleExistingUser(usersFromDB)) {
      alert('Email is not valid');
      return;
    }

    usersFromDB.push(this.userData);
    this.handleDataBase.saveDataToDB('users', usersFromDB);
  }

  handleExistingUser(users: UserObject[]) {
    return users.some((user: UserObject) => user.email === this.userData.email);
  }
}
