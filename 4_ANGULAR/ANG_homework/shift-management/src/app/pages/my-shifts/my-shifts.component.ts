import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';
import { StateService } from 'src/app/utils/services/state/state.service';
import { Filter, filterBy, sorterBy, tableHeadInfo } from './formData';
import { Router } from '@angular/router';
import { Shift, State } from 'src/app/utils/Interfaces';

@Component({
  selector: 'app-my-shifts',
  templateUrl: './my-shifts.component.html',
  styleUrls: ['./my-shifts.component.scss'],
})
export class MyShiftsComponent implements OnInit, OnDestroy {
  // html data
  filterBy: Filter[] = filterBy;
  sorterBy: Filter[] = sorterBy;
  tableHeadInfo: string[] = tableHeadInfo;

  // component data
  currentState!: State;
  myShifts: Shift[] = [];
  shiftsCount: number = 0;

  private stateSubscription: Subscription | undefined;

  constructor(
    private DB: HandleDBService,
    private state: StateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentState = this.state.getState();

    this.stateSubscription = this.state.stateChanged.subscribe((newState) => {
      this.currentState = newState;
    });

    this.getShifts();
  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  async getShifts() {
    this.myShifts = await this.DB.getFirestoreDocs('shiftAppShifts', [
      this.currentState.currentLoggedFireUser!.id,
      'shifts',
    ]);

    if (this.myShifts) {
      this.shiftsCount = this.myShifts.length;
    }
  }

  async editShift(shiftID: string) {
    this.currentState.shiftToEdit = (await this.DB.getFirestoreDoc(
      'shiftAppShifts',
      [this.currentState.currentLoggedFireUser!.id, 'shifts', shiftID]
    )) as Shift;

    this.router.navigate([`edit-shift/${shiftID}`]);
  }

  deleteShift(shiftID: string) {
    this.DB.deleteFirestoreDoc('shiftAppShifts', [
      this.currentState.currentLoggedFireUser!.id,
      'shifts',
      shiftID,
    ]);

    this.myShifts = this.myShifts.filter((shift) => shift.shiftID != shiftID);
  }
}
