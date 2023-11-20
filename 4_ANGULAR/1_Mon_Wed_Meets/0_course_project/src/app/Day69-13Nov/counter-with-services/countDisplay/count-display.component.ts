import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.scss'],
})
export class CountDisplay implements OnInit {
  counter: number = 0;

  constructor(public counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService
      .displayValue()
      .subscribe((newCount) => (this.counter = newCount));
  }
}
