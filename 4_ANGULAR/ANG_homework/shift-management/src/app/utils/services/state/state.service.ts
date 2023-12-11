import { Injectable, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';

export interface State {
  currentUser?: UserCredential;
  currentUserShifts?: string;
  isEditing: boolean;
  activeComponent: string;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  private state: State = {
    currentUser: undefined,
    currentUserShifts: undefined,
    isEditing: false,
    activeComponent: 'Dashboard',
  };

  getState() {
    return this.state;
  }
  setState(data: Partial<State>): void {
    this.state = { ...this.state, ...data };
  }
}
