import { Component } from '@angular/core';
import { PointCounterService } from '../point-counter.service';

@Component({
  selector: 'app-minus-s',
  templateUrl: './minus-s.component.html',
  styleUrls: ['./minus-s.component.css'],
})
export class MinusSComponent {
  constructor(private counterService: PointCounterService) {}

  onMinus() {
    this.counterService.decrement();
  }
}
