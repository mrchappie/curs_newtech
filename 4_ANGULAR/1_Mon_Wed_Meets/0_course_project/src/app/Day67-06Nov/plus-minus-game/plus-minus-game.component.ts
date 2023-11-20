import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-minus-game',
  templateUrl: './plus-minus-game.component.html',
  styleUrls: ['./plus-minus-game.component.css'],
})
export class PlusMinusGameComponent {
  counter: number = 0;

  setCounter(value: number) {
    this.counter = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
