import { Component, OnInit } from '@angular/core';
import {
  State,
  StateService,
} from 'src/app/utils/services/state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentState!: State;

  activeComponent: string = '';
  currentUser: any = 'this.currentState.currentUser?.user.displayName';

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.currentState = this.state.getState();
    this.activeComponent = this.currentState.activeComponent;
    this.currentUser = this.currentState.currentUser?.user.displayName;
  }
}
