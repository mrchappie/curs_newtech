import { Component } from '@angular/core';
import { State, UserSettings } from 'src/app/utils/Interfaces';
import { Filter, orderBy, sorterBy } from '../../my-shifts/formData';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/utils/services/state/state.service';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.scss'],
})
export class AllWorkersComponent {
  // state
  currentState!: State;

  // html data
  sorterBy: Filter[] = sorterBy;
  orderBy: Filter[] = orderBy;

  // component data
  allUsers: UserSettings[] = [];
  shiftsCount: number = 0;

  // filters queries
  shiftNameQuery: string = '';
  shiftStartDateQuery: string = '';
  shiftEndDateQuery: string = '';

  sorterByQuery: string = '';
  orderByQuery: string = '';

  private stateSubscription: Subscription | undefined;

  constructor(private state: StateService, private DB: HandleDBService) {}

  ngOnInit(): void {
    this.currentState = this.state.getState();
    this.getAllUsers();
    this.stateSubscription = this.state.stateChanged.subscribe((newState) => {
      this.currentState = newState;
    });
  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  async getAllUsers() {
    this.allUsers = await this.DB.getFirestoreDocs('shiftAppUsers', []);
    console.log(this.allUsers);
  }

  resetFilters() {}
}
