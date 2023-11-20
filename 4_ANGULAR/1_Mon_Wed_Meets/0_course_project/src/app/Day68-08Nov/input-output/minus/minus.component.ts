import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css'],
})
export class MinusComponent {
  @Output()
  decrement = new EventEmitter();

  onMinus() {
    this.decrement.emit();
  }
}
