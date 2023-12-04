import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-exercise',
  templateUrl: './pipes-exercise.component.html',
  styleUrls: ['./pipes-exercise.component.scss'],
})
export class PipesExerciseComponent {
  tempInCelsius: number = 0;
  scale: string = 'celsius';
  decimals: number = 10;
}
