import { Injectable } from '@angular/core';

export interface GlobalState {
  user: any;
  login: any;
}

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private data: GlobalState = {} as GlobalState;

  constructor() {}

  setData(items: any) {
    this.data = items;
  }

  getData() {
    return this.data;
  }
}
