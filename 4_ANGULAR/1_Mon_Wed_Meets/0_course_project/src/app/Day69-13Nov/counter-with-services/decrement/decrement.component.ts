import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.scss'],
})
export class DecrementComponent {
  constructor(public counterService: CounterService) {}

  decrement() {
    this.counterService.decrement();
  }
}
