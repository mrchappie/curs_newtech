import { Component, OnInit } from '@angular/core';
import { PointCounterService } from '../point-counter.service';

@Component({
  selector: 'app-display-s',
  templateUrl: './display-s.component.html',
  styleUrls: ['./display-s.component.css'],
})
export class DisplaySComponent implements OnInit {
  points = 0;

  constructor(public counterService: PointCounterService) {}

  ngOnInit(): void {
    this.counterService
      .getPointsEvent()
      .subscribe((newPoints) => (this.points = newPoints));
  }
}
