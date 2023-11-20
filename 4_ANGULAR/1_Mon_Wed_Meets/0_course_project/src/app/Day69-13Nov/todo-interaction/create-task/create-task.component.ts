import { Component } from '@angular/core';

export interface Task {
  taskDesc: string;
  dueDate: string;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  tasks: Task[] = [];

  task: Task = { taskDesc: '', dueDate: '' };

  addTask() {
    this.tasks.push(this.task);
  }
}
