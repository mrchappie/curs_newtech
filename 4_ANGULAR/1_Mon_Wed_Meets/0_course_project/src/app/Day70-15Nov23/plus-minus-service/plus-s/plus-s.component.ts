import { Component } from '@angular/core';
import { PointCounterService } from '../point-counter.service';

@Component({
  selector: 'app-plus-s',
  templateUrl: './plus-s.component.html',
  styleUrls: ['./plus-s.component.css'],
})
export class PlusSComponent {
  constructor(private counterService: PointCounterService) {}

  onPlus() {
    this.counterService.increment();
  }
}
