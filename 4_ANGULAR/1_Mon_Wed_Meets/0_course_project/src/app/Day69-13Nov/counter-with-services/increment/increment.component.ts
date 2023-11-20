import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss'],
})
export class IncrementComponent {
  constructor(public counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
}
