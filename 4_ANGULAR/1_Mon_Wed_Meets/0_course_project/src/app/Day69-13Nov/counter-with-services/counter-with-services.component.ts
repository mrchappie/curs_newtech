import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-with-services',
  templateUrl: './counter-with-services.component.html',
  styleUrls: ['./counter-with-services.component.scss'],
  providers: [CounterService],
})
export class CounterWithServicesComponent {}
