import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
})
export class FirebaseComponent implements OnInit {
  email: string = 'alex@mail.com';
  password: string = '12345';
  authState = 'Loading...';

  constructor(
    private auth: Auth,
    private authService: FirebaseAuthService,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.authState = `Logged in | Current user: ${user.email}`;
      } else {
        this.authState = 'Logged out';
      }
    });
  }

  login() {
    this.authService
      .login(this.email, this.password)
      .then(console.log)
      .catch(console.log);
  }

  register() {
    this.authService
      .register(this.email, this.password)
      .then(console.log)
      .catch(console.log);
  }

  logout() {
    this.authService.logout();
  }

  getDBEntry(collection: string, path: string) {
    getDoc(doc(this.firestore, collection, ...path.split('/')))
      .then((ds) => ds.data())
      .then(console.log, console.error);
  }

  getCollectionEntries(collectionName: string, path: string) {
    getDocs(
      // query(
      collection(this.firestore, collectionName, ...path.split('/'))
      // ,where('firstname', '==', 'Ion')
      // )
    ).then((docs) =>
      docs.forEach((d) => {
        console.log(d.data());
      })
    );
  }

  addEmployee(id: string, name: string, position: string) {
    setDoc(doc(this.firestore, 'test', 'person', 'employees', id), {
      name,
      position,
    }).then(console.log, console.error);
  }
}
