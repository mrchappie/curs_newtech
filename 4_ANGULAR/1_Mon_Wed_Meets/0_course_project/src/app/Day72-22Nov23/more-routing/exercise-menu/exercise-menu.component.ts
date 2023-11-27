import { Component } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-exercise-menu',
  templateUrl: './exercise-menu.component.html',
  styleUrls: ['./exercise-menu.component.scss'],
})
export class ExerciseMenuComponent {
  constructor(protected dishService: DishService) {}
}
