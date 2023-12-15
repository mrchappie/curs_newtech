import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsForm, settingsFormData } from './formData';
import { StateService } from 'src/app/utils/services/state/state.service';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { State, UserSettings } from 'src/app/utils/Interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentState!: State;
  settingsFormInputs: SettingsForm[] = settingsFormData;
  isAdmin: boolean = false;
  userSettings!: UserSettings;
  settingsForm!: FormGroup;

  private stateSubscription: Subscription | undefined;

  constructor(
    private state: StateService,
    private DB: HandleDBService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      userName: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      phoneNumber: [''],
    });

    this.currentState = this.state.getState();
    this.isAdmin = this.currentState.isAdmin;
    this.updateState();

    this.stateSubscription = this.state.stateChanged.subscribe((newState) => {
      this.currentState = newState;
      this.isAdmin = this.currentState.isAdmin;
    });
  }

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  async updateState() {
    this.userSettings = (await this.DB.getFirestoreDoc('shiftAppUsers', [
      this.currentState.currentLoggedFireUser!.id,
    ])) as UserSettings;

    this.state.setState({
      currentLoggedFireUser: this.userSettings,
    });

    if (this.userSettings) {
      this.settingsForm.patchValue(this.userSettings);
    }
  }

  async onSubmit() {
    await this.DB.updateFirestoreDoc(
      'shiftAppUsers',
      [this.currentState.currentLoggedFireUser!.id],
      this.settingsForm.value
    );
    this.updateState();
  }
}
