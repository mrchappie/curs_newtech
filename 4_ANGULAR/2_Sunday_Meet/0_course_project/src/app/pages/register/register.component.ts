import { Component } from '@angular/core';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';
import { HandleDataBase } from 'src/app/utils/services/handleLocalStorage/handleDataBase.service';
import { v4 as uuidv4 } from 'uuid';

export interface UserObject {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  id?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private handleDataBase: HandleDataBase,
    private handleDB: HandleDBService
  ) {}

  userData: UserObject = {
    firstName: 'Alex',
    lastName: 'M',
    email: 'alex@mail.com',
    password: '1234',
    confirmPassword: '1234',
    id: uuidv4(),
  };

  // users: string[] = [];

  // saveUserData() {
  //   const usersFromDB: UserObject[] =
  //     this.handleDataBase.getDataFromDB('users');

  //   if (this.handleExistingUser(usersFromDB)) {
  //     alert('Email is not valid');
  //     return;
  //   }

  //   usersFromDB.push(this.userData);
  //   this.handleDataBase.saveDataToDB('users', usersFromDB);
  // }

  // handleExistingUser(users: UserObject[]) {
  //   return users.some((user: UserObject) => user.email === this.userData.email);
  // }

  async onSubmit() {
    try {
      await this.handleDB.getFirebaseByQuery(
        'users',
        this.userData.email,
        'email'
      );
      await this.handleDB.writeFirebaseDoc('users', this.userData);
    } catch (error) {
      console.log(error);
    }
  }
}
