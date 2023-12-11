import { Component } from '@angular/core';
import { NavbarRoutes, adminRoutes, userRoutes } from './navbarData';
import { StateService } from 'src/app/utils/services/state/state.service';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isAdmin: boolean = false;
  navbarRoutes: NavbarRoutes[] = !this.isAdmin ? userRoutes : adminRoutes;

  constructor(private state: StateService, private auth: HandleDBService) {}

  onSubmit() {
    this.auth.logout();
  }
}
