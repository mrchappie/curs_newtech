import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  taskName: string;
  taskDescription: string;
  isDone: boolean;
  id: string;
}

@Component({
  selector: 'app-todo-firebase',
  templateUrl: './todo-firebase.component.html',
  styleUrls: ['./todo-firebase.component.scss'],
})
export class TodoFirebaseComponent implements OnInit {
  todoForm!: FormGroup;
  todoTask: Task = {
    taskName: '',
    taskDescription: '',
    isDone: false,
    id: '',
  };
  todoTasksList: Task[] = [];

  constructor(private fb: FormBuilder, private db: Firestore) {}

  ngOnInit(): void {
    // get data from db
    this.getFromFirebase();

    // form
    this.todoForm = this.fb.group({
      taskName: ['to do'],
      taskDescription: [''],
    });
  }

  onSubmit() {
    if (this.todoForm.value.taskName != '') {
      this.todoTask = {
        taskName: this.todoForm.value.taskName,
        taskDescription: this.todoForm.value.taskDescription,
        isDone: false,
        id: uuidv4(),
      };
      this.todoTasksList.push(this.todoTask);
      this.addToFirebase();
    }
  }

  deleteTask(index: number, id: string) {
    this.todoTasksList.splice(index, 1);
    this.deleteFromFirebase(id);
  }

  markAsDone(index: number, id: string) {
    this.todoTasksList[index].isDone = !this.todoTasksList[index].isDone;

    this.updateFirebaseDoc(id, this.todoTasksList[index].isDone);
  }

  //* ADD DOC
  async addToFirebase() {
    try {
      await setDoc(doc(this.db, 'todos', this.todoTask.id), this.todoTask);
    } catch (error) {
      console.log(error);
    }
  }

  //* UPDATE DOC
  async updateFirebaseDoc(docID: string, isDone: boolean) {
    try {
      const docRef = doc(this.db, 'todos', docID);
      await updateDoc(docRef, {
        isDone,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //* GET ALL DOCS
  async getFromFirebase() {
    try {
      const docsData = await getDocs(collection(this.db, 'todos'));
      const docs = docsData.docs.map((doc) => doc.data() as Task);

      this.todoTasksList.push(...docs);
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  //* DELETE DOC
  async deleteFromFirebase(id: string) {
    await deleteDoc(doc(this.db, 'todos', id));
  }
}
