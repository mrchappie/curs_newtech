import { Injectable } from '@angular/core';
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  currentUser?: User;
  createdUser?: User;

  constructor(private auth: Auth) {}

  async register(email: string, password: string) {
    const credentials = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    this.createdUser = credentials.user;
    alert(`Welcome ${this.createdUser.email}!`);
    return credentials.user;
  }

  async login(email: string, password: string) {
    try {
      const credentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.currentUser = credentials.user;
      return credentials.user;
    } catch {
      throw new Error('Invalid credentials!');
    }
  }

  async updateProfile(
    newProfile: Pick<Partial<User>, 'displayName' | 'photoURL'>
  ) {
    if (this.currentUser) {
      updateProfile(this.currentUser, newProfile);
    }
  }

  async logout() {
    await signOut(this.auth);
    this.currentUser = undefined;
    return;
  }
}
