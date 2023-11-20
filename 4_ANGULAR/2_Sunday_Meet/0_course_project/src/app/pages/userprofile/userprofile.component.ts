import { Component, OnInit } from '@angular/core';
import { UserObject } from '../register/register.component';
import { HandleDataBase } from 'src/app/utils/helpers/handleDataBase.service';
import { ObservableService } from 'src/app/utils/observable/observable.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent {
  constructor(
    protected handleDataBase: HandleDataBase,
    protected fetchedData: ObservableService
  ) {}

  loading: boolean = true;
  items: string[] = [];

  ngOnInit() {
    this.handleUsers();
    this.fetchData();
  }

  userData: UserObject = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  getDataFromLocalStorage(): [UserObject[], string] {
    const users: UserObject[] = this.handleDataBase.getDataFromDB('users');
    const loggedUserData: string =
      this.handleDataBase.getDataFromDB('loggedUser');

    return [users, loggedUserData];
  }

  handleUsers() {
    const [users, loggedUserData] = this.getDataFromLocalStorage();

    if (loggedUserData) {
      const loggedUser = users.find(
        (user: UserObject) => user.email === loggedUserData
      );

      if (loggedUser) {
        this.userData = loggedUser;
      }
    }
  }

  updateUserData() {
    const [users, loggedUserData] = this.getDataFromLocalStorage();

    // getting logged user id
    const idOfLoggedUser = users.findIndex(
      (user) => user.email === loggedUserData
    );

    // creating a deep clone of users array
    const newUsers: UserObject[] = [...users];
    newUsers.splice(idOfLoggedUser, 1, this.userData);

    // updating new users DB
    this.handleDataBase.saveDataToDB('users', newUsers);
    this.handleDataBase.saveDataToDB('loggedUser', this.userData.email);
  }

  // with observables
  fetchData() {
    this.loading = true;
    this.fetchedData.getData().subscribe(
      (data) => {
        this.items = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  addItem() {
    this.loading = true;
    this.fetchedData.addItem('Ionel').subscribe(
      (data) => {
        this.items = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
