import { UserCredential } from '@angular/fire/auth';

export interface State {
  currentUserCred?: UserCredential;
  currentLoggedFireUser?: UserSettings;
  currentUserShifts?: string;
  isEditing: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  activeComponent: string;
  shiftToEdit: Shift | undefined;
}

export interface UserSettings {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
  id: string;
  phoneNumber: string;
  adminPanel: {
    isAdmin: boolean;
  };
}

export interface Shift {
  shiftID: string;
  shiftDate: string;
  startTime: string;
  endTime: string;
  workplace: string;
  wagePerHour: string;
  shiftRevenue: string;
  timeStamp: Date;
  [key: string]: any;
}
