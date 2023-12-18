import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shift, State } from 'src/app/utils/Interfaces';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';
import { StateService } from 'src/app/utils/services/state/state.service';
import {
  Filter,
  orderBy,
  sorterBy,
  tableHeadInfo,
} from '../../my-shifts/formData';

@Component({
  selector: 'app-all-shifts',
  templateUrl: './all-shifts.component.html',
  styleUrls: ['./all-shifts.component.scss'],
})
export class AllShiftsComponent {
  // state
  currentState!: State;

  // html data
  sorterBy: Filter[] = sorterBy;
  orderBy: Filter[] = orderBy;
  tableHeadInfo: string[] = tableHeadInfo;

  // component data
  allShifts: Shift[] = [];
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
    this.getAllShifts();
    this.stateSubscription = this.state.stateChanged.subscribe((newState) => {
      this.currentState = newState;
    });
  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  async getAllShifts() {
    this.allShifts = await this.DB.getFirestoreDocs('shiftAppShifts', [
      '2023',
      'december',
    ]);
  }

  resetFilters() {}

  deleteShift() {}

  editShift() {}
}
