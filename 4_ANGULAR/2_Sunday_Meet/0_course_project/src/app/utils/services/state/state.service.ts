import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state = new BehaviorSubject<State>({
    firstName: 'Alex',
    lastName: '',
  });
  state$ = this.state.asObservable();

  get currentState() {
    return this.state.value;
  }

  setState(data: Partial<State>) {
    this.state.next({ ...this.currentState, ...data });
  }
}

export interface State {
  firstName: string;
  lastName: string;
}
