import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decrease-counter',
  templateUrl: './decrease-counter.component.html',
  styleUrls: ['./decrease-counter.component.scss'],
})
export class DecreaseCounterComponent {
  @Output()
  decreaseCounter = new EventEmitter();

  decrease() {
    this.decreaseCounter.emit();
  }
}
