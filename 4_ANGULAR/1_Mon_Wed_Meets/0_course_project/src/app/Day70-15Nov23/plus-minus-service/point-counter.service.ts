import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PointCounterService {
  private points = 0;
  private onPointsChanges = new EventEmitter<number>();

  constructor() {}

  getPointsEvent() {
    return this.onPointsChanges;
  }

  increment() {
    this.points++;
    this.onPointsChanges.emit(this.points);
    console.log(this.points);
  }

  decrement() {
    this.points--;
    this.onPointsChanges.emit(this.points);
    console.log(this.points);
  }
}
