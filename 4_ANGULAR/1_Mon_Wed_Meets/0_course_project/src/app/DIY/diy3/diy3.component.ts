import { Component } from '@angular/core';

@Component({
  selector: 'app-diy3',
  templateUrl: './diy3.component.html',
  styleUrls: ['./diy3.component.scss'],
})
export class Diy3Component {
  counter: number = 0;
  textColor: string = 'red';
  counterArray: number[] = [];

  increaseCounter() {
    if (this.counter < 10) {
      this.counter++;
      this.handleTextColor();
      this.counterArray.push(1);
    }
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.handleTextColor();
      this.counterArray.pop();
    }
  }

  handleTextColor() {
    this.textColor = this.counter > 5 ? 'green' : 'red';
  }
}
