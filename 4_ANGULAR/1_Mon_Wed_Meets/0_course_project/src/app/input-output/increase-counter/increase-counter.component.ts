import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-increase-counter',
  templateUrl: './increase-counter.component.html',
  styleUrls: ['./increase-counter.component.scss'],
})
export class IncreaseCounterComponent {
  @Output()
  increaseCounter = new EventEmitter();

  increase() {
    this.increaseCounter.emit();
  }
}
