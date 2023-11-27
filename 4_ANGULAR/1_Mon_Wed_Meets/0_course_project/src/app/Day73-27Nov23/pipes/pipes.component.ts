import { Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  employeeData = [
    {
      firstName: 'John',
      lastName: 'Smith',
      dob: new Date(18, 5, 1985),
      job: 'engineer',
      level: 'senior',
      salary: 350,
    },
    {
      firstName: 'Anee',
      middleNames: ['mary', 'lou'],
      lastName: 'Smith',
      dob: new Date(12, 10, 1989),
      job: 'software engineer',
      level: 'principal',
      salary: 550,
    },
    {
      firstName: 'Steve',
      middleNames: ['mary'],
      lastName: 'Stevenson',
      dob: new Date(12, 5, 1970),
      job: 'project engineer',
      level: 'principal',
      salary: 550,
    },
  ];

  empData$ = of(this.employeeData).pipe(delay(3000));
  nameFormat: 'short' | 'medium' | 'long' = 'short';
}

export type EmployeeInfo = {
  firstName: string;
  middleNames?: string[];
  lastName: string;
  dob: Date;
  job: string;
  level: string;
  salary: number;
};
