import { Component, OnInit } from '@angular/core';
import { HandleDataBase } from 'src/app/utils/services/handleLocalStorage/handleDataBase.service';
import { UserObject } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(protected handleDataBase: HandleDataBase) {}

  users: UserObject[] = [];

  ngOnInit(): void {
    this.users = this.handleDataBase.getDataFromDB('users');
    console.log(this.users);
  }
}
