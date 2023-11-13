import { Component } from '@angular/core';

@Component({
  selector: 'app-diy4-todo',
  templateUrl: './diy4-todo.component.html',
  styleUrls: ['./diy4-todo.component.scss'],
})
export class Diy4TodoComponent {
  tasks: { taskContent: string; dueDate: string }[] = [];

  addTask(taskContent: string, dueDate: string) {
    if (taskContent === '' || dueDate === '') {
      alert('Please insert data!');
      return;
    }
    const task = {
      taskContent,
      dueDate,
    };

    this.tasks.push(task);

    console.log(this.tasks);
  }
}
