import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputType, formData } from './formData';
import {
  State,
  StateService,
} from 'src/app/utils/services/state/state.service';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

@Component({
  selector: 'app-handle-shifts',
  templateUrl: './handle-shifts.component.html',
  styleUrls: ['./handle-shifts.component.scss'],
})
export class HandleShiftsComponent implements OnInit {
  currentState!: State;

  shiftForm!: FormGroup;
  shiftInputs: InputType[] = formData;
  isEditing = this.currentState.isEditing;

  constructor(
    private fb: FormBuilder,
    private state: StateService,
    private handleDB: HandleDBService
  ) {}

  ngOnInit(): void {
    this.currentState = this.state.getState();

    this.shiftForm = this.fb.group({
      shiftID: [''],
      shiftDate: [''],
      startTime: [''],
      endTime: [''],
      wagePerHour: [''],
      shiftRevenue: [''],
    });
  }

  onSubmit() {
    // console.log(this.shiftForm.value);
    console.log(this.handleDB.getFirestoreEntry());
    console.log(this.handleDB.setFirestoreEntry());
  }
}
