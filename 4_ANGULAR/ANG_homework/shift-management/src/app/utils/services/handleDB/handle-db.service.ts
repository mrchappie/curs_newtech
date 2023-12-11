import { Injectable, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';

import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from '@angular/fire/firestore';
import { State, StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root',
})
export class HandleDBService implements OnInit {
  currentState!: State;

  constructor(
    private auth: Auth,
    private state: StateService,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    this.currentState = this.state.getState();
  }

  // localStorage
  setLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  // firebase auth
  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    try {
      this.currentState.currentUser = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await updateProfile(this.currentState.currentUser.user, {
        displayName: `${firstName} ${lastName}`,
      });

      console.log(this.currentState.currentUser.user);
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    try {
      this.state.setState(
        await signInWithEmailAndPassword(this.auth, email, password)
      );

      console.log('Logged in with:', this.currentState.currentUser.user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    await signOut(this.auth);
    console.log('Logged out');
    return;
  }

  // firestore

  getFirestoreEntry(collectionName: string = 'shiftAppUsers') {
    getDocs(collection(this.firestore, collectionName)).then((docs) =>
      docs.forEach((d) => console.log(d.data()))
    );
  }

  setFirestoreEntry(
    id: string = 'testID',
    name: string = 'Lucia',
    position: string = 'baby'
  ) {
    setDoc(doc(this.firestore, 'shiftAppShifts', id), {
      name,
      position,
    }).then(console.log, console.error);
  }
}
