import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css'],
})
export class PlusComponent {
  @Output()
  increment = new EventEmitter();

  onPlus() {
    this.increment.emit();
  }
}
