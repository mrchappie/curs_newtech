import { Injectable } from '@angular/core';
import { UserObject } from 'src/app/pages/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class HandleDataBase {
  constructor() {}

  getDataFromDB(key: string) {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  saveDataToDB(key: string, data: UserObject[] | string) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
