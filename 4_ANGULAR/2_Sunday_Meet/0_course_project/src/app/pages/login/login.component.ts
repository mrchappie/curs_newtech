import { Component } from '@angular/core';
import { UserObject } from '../register/register.component';
import { Router } from '@angular/router';
import { HandleDataBase } from 'src/app/utils/services/handleLocalStorage/handleDataBase.service';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

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
  constructor(
    private router: Router,
    private handleDataBase: HandleDataBase,
    private handleDB: HandleDBService
  ) {}

  loggedUserData: LoginData = {
    email: '',
    password: '',
  };

  // getUsersFromDB() {
  //   const users: UserObject[] = this.handleDataBase.getDataFromDB('users');

  //   if (this.handleExistingUser(users)) {
  //     this.handleDataBase.saveDataToDB('loggedUser', this.loggedUserData.email);
  //     this.router.navigate(['/userprofile']);
  //     return;
  //   } else {
  //     alert('Error on log in');
  //   }
  // }

  // handleExistingUser(users: UserObject[]) {
  //   return users.some(
  //     (user: LoginData) => user.email === this.loggedUserData.email
  //   );
  // }

  async onSubmit() {
    // this.handleDB
    //   .getFirebaseByQuery('users', this.loggedUserData.email, 'email')
    //   .subscribe((data) => {
    //     console.log(data);

    //     data.forEach((user: UserObject) => {
    //       if (
    //         user.email === this.loggedUserData.email &&
    //         user.password === this.loggedUserData.password
    //       ) {
    //         console.log('logged in');
    //       } else {
    //         console.log('invalid credentials');
    //       }
    //     });
    //   });

    const allUsers = await this.handleDB.getFirebaseAllDocs('users');
    console.log(allUsers);
  }
}
