import { Component } from '@angular/core';

@Component({
  selector: 'app-diy1',
  templateUrl: './diy1.component.html',
  styleUrls: ['./diy1.component.scss'],
})
export class DIY1Component {
  firstName?: string;
  lastName?: string;
  email: string = '';

  sayHello() {
    alert(`${this.firstName} ${this.lastName} says ${this.email} is boring..`);
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}
