import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
