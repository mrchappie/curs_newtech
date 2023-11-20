import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private counter: number = 0;
  private onPointsChange = new EventEmitter<number>();

  increment() {
    if (this.counter < 10) {
      this.counter++;
      this.onPointsChange.emit(this.counter);
    }
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
      this.onPointsChange.emit(this.counter);
    }
  }

  displayValue() {
    return this.onPointsChange;
  }
}
