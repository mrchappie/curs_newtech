import { Component, OnInit } from '@angular/core';
import { UserObject } from '../register/register.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent {
  ngOnInit() {
    this.handleUsers();
  }

  userData: UserObject = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleUsers() {
    const users: UserObject[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );

    const loggedUserData: string = JSON.parse(
      localStorage.getItem('loggedUser') || ''
    );
    console.log(loggedUserData);

    if (loggedUserData) {
      const loggedUser = users.find((user) => user.email === loggedUserData);
      console.log(loggedUser);

      if (loggedUser) {
        this.userData = loggedUser;
      }
    }
  }

  updateUserData() {}
}
