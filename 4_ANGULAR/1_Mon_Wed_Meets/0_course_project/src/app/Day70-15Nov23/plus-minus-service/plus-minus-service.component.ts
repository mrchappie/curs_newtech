import { Component } from '@angular/core';
import { PointCounterService } from './point-counter.service';

@Component({
  selector: 'app-plus-minus-service',
  templateUrl: './plus-minus-service.component.html',
  styleUrls: ['./plus-minus-service.component.css'],
  providers: [PointCounterService],
})
export class PlusMinusServiceComponent {}
