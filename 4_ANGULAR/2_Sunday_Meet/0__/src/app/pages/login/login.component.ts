import { Component } from '@angular/core';
import { UserObject } from '../register/register.component';
import { Router } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  loggedUserData: LoginData = {
    email: '',
    password: '',
  };

  getUsersFromDB() {
    const users: UserObject[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );

    if (this.handleExistingUser(users)) {
      // alert('Logged in');
      localStorage.setItem(
        'loggedUser',
        JSON.stringify(this.loggedUserData.email)
      );

      this.router.navigate(['/userprofile']);
      return;
    } else {
      alert('Error on log in');
    }
  }

  handleExistingUser(users: UserObject[]) {
    return users.some(
      (user: LoginData) => user.email === this.loggedUserData.email
    );
  }
}
