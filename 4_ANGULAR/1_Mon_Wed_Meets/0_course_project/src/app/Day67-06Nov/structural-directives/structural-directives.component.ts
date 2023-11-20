import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent {
  isVisible?: boolean;
  check1: boolean = false;
  check2: boolean = false;
  checkIfElse = true;

  tagType?: string;

  items: {
    name: string;
    price: number;
    quantity: number;
  }[] = [
    {
      name: 'Rice pack',
      price: 3.99,
      quantity: 1,
    },
    {
      name: 'Tomato sauce',
      price: 2.99,
      quantity: 0.3,
    },
    {
      name: 'Pasta',
      price: 7.99,
      quantity: 0.5,
    },
  ];
}
