import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-ex',
  templateUrl: './todo-ex.component.html',
  styleUrls: ['./todo-ex.component.css'],
})
export class TodoExComponent {
  newTaskDescription: string = '';
  newTaskDueDate: string = '';

  tasks: Task[] = [
    new Task('Task 1', '2023-02-23'),
    new Task('Task 2', '2024-03-04'),
    new Task('Task 3', '2023-01-12'),
  ];

  addTask() {
    this.tasks.unshift(new Task(this.newTaskDescription, this.newTaskDueDate));
    this.newTaskDescription = '';
    this.newTaskDueDate = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

export class Task {
  completed: boolean = false;

  constructor(public description: string, public dueDate: string) {}

  isPastDue(): boolean {
    return Date.parse(this.dueDate) < Date.now();
  }
}
