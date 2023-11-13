import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss'],
})
export class DisplayCounterComponent {
  @Input()
  counterDisplay?: number;
}
