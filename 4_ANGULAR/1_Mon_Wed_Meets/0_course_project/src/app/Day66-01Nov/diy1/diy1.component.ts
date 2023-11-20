import { Component } from '@angular/core';

@Component({
  selector: 'app-diy1',
  templateUrl: './diy1.component.html',
  styleUrls: ['./diy1.component.css'],
})
export class Diy1Component {
  saveData(firstname: string, lastname: string, email: string) {
    alert(`Data is:
    firstname: ${firstname}
    lastname: ${lastname}
    email: ${email}`);
  }

  getGreeting(firstname: string, lastname: string, email: string) {
    if (!firstname || !lastname || !email) return '';
    return `Hi, my name is ${firstname} ${lastname} and my email is ${email}.`;
  }
}
