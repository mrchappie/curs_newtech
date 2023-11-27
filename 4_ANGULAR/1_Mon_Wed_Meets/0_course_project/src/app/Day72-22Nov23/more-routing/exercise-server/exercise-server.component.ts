import { Component } from '@angular/core';
import { CanActivateService } from '../can-activate.service';

@Component({
  selector: 'app-exercise-server',
  templateUrl: './exercise-server.component.html',
  styleUrls: ['./exercise-server.component.scss'],
})
export class ExerciseServerComponent {
  serverName?: string;

  constructor(private canActivate: CanActivateService) {}
}
