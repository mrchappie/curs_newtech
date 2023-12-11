import { Component } from '@angular/core';

@Component({
  selector: 'app-my-shifts',
  templateUrl: './my-shifts.component.html',
  styleUrls: ['./my-shifts.component.scss'],
})
export class MyShiftsComponent {
  myShifts: Shift[] = [
    {
      shiftID: 'string',
      shiftDate: 'string',
      startTime: 'string',
      endTime: 'string',
      wagePerHour: 'string',
      shiftRevenue: 'string',
    },
    {
      shiftID: 'string',
      shiftDate: 'string',
      startTime: 'string',
      endTime: 'string',
      wagePerHour: 'string',
      shiftRevenue: 'string',
    },
  ];
}

export interface Shift {
  shiftID: string;
  shiftDate: string;
  startTime: string;
  endTime: string;
  wagePerHour: string;
  shiftRevenue: string;
}
