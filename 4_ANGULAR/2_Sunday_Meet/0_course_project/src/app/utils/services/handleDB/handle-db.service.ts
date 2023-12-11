import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  query,
  getDocs,
  where,
} from '@angular/fire/firestore';
import { Observable, catchError, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleDBService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async getFirebaseData(collectionName: string, docID: string): Promise<any> {
    const docRef = doc(this.firestore, collectionName, docID);
    const docData = await getDoc(docRef);

    if (docData.exists()) {
      return docData.data();
    } else {
      return null;
    }
  }

  async updateFirebaseData(
    collectionName: string,
    docID: string,
    data: any
  ): Promise<any> {
    try {
      const docRef = doc(this.firestore, collectionName, docID);
      const existingData = await getDoc(docRef);

      if (existingData.exists()) {
        await updateDoc(docRef, data);
      } else {
        await setDoc(docRef, data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFirebaseData(
    collectionName: string,
    docID: string
  ): Promise<any> {
    try {
      const docRef = doc(this.firestore, collectionName, docID);
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  }

  async writeFirebaseDoc(collectionName: string, data: any) {
    try {
      const docRef = doc(this.firestore, collectionName, data.id);
      await setDoc(docRef, data);
    } catch (error) {
      console.log(error);
    }
  }

  getFirebaseByQuery(
    collectionName: string,
    queryName: string,
    queryType: string
  ): Observable<any> {
    const collectionRef = collection(this.firestore, collectionName);
    const q = query(collectionRef, where(queryType, '==', queryName));

    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        if (querySnapshot.empty) {
          return null;
        }
        return querySnapshot.docs.map((doc) => doc.data());
      }),
      catchError((error) => {
        console.error(error);
        return of(null); // Return null in case of an error
      })
    );
  }

  async getFirebaseAllDocs(collectionName: string) {
    const querySnapshot = await getDocs(
      collection(this.firestore, collectionName)
    );

    // querySnapshot.forEach((doc) => console.log(doc.data()));

    return querySnapshot.docs.map((doc) => doc.data());
  }
}
