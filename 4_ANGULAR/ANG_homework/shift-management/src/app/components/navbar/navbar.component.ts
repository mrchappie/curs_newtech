import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarRoutes, adminRoutes, userRoutes } from './navbarData';
import { StateService } from 'src/app/utils/services/state/state.service';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';
import { Subscription } from 'rxjs';
import { State } from 'src/app/utils/Interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentState!: State;
  isAdmin: boolean = false;
  navbarRoutes!: NavbarRoutes[];
  isLoggedIn: boolean = false;

  private stateSubscription: Subscription | undefined;

  constructor(private state: StateService, private DB: HandleDBService) {}

  ngOnInit(): void {
    this.currentState = this.state.getState();
    this.navbarRoutes = !this.isAdmin ? userRoutes : adminRoutes;

    this.stateSubscription = this.state.stateChanged.subscribe((newState) => {
      this.currentState = newState;
      this.isAdmin = this.currentState.isAdmin;
      this.navbarRoutes = !this.isAdmin ? userRoutes : adminRoutes;
    });
  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  onSubmit() {
    this.DB.logout();
    console.log('clicked from navbar comp');
  }
}
