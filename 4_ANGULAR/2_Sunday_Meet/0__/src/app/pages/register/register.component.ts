import { Component } from '@angular/core';

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
  userData: UserObject = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  users: string[] = [];

  saveUserData() {
    const usersFromDB: UserObject[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );

    if (this.handleExistingUser(usersFromDB)) {
      alert('User already existing!');
      return;
    }

    usersFromDB.push(this.userData);
    localStorage.setItem('users', JSON.stringify(usersFromDB));
  }

  handleExistingUser(users: UserObject[]) {
    return users.some((user: UserObject) => user.email === this.userData.email);
  }
}
