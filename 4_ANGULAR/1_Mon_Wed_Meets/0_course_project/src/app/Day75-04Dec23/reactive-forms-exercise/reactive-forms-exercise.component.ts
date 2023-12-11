import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-exercise',
  templateUrl: './reactive-forms-exercise.component.html',
  styleUrls: ['./reactive-forms-exercise.component.scss'],
})
export class ReactiveFormsExerciseComponent implements OnInit {
  streamingForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: Auth) {}

  ngOnInit(): void {
    this.streamingForm = this.fb.group({
      profile: this.fb.group({
        email: [''],
        password: [''],
        confPass: [''],
        firstname: [''],
        lastname: [''],
        dob: [''],
      }),
      plan: this.fb.group({
        type: ['premium'],
        devices: this.fb.array([
          this.fb.group({
            type: [''],
            os: [''],
            name: [''],
          }),
        ]),
      }),
    });
  }

  get devices() {
    return (this.streamingForm.get('plan.devices') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.streamingForm.value);
  }

  getDeviceFromGroup() {
    return this.fb.group({
      type: [''],
      os: [''],
      name: [''],
    });
  }

  addDevice() {
    this.devices.push(this.getDeviceFromGroup());
  }

  removeDevice(index: number) {}
}
