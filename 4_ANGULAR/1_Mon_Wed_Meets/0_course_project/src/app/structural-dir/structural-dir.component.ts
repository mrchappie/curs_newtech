import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.scss'],
})
export class StructuralDirComponent {
  isVisible: boolean = true;

  checkIfElse: boolean = true;

  check1: boolean = true;
  check2: boolean = true;
  check3: boolean = true;

  items: {
    name: string;
    price: number;
    quantity: number;
  }[] = [
    {
      name: 'Cola',
      price: 20,
      quantity: 40,
    },
    {
      name: 'Pepsi',
      price: 15,
      quantity: 30,
    },
    {
      name: 'Bere',
      price: 10,
      quantity: 20,
    },
    {
      name: 'Apa',
      price: 5,
      quantity: 0,
    },
    {
      name: 'Cola',
      price: 20,
      quantity: 40,
    },
    {
      name: 'Pepsi',
      price: 15,
      quantity: 30,
    },
    {
      name: 'Bere',
      price: 10,
      quantity: 20,
    },
    {
      name: 'Apa',
      price: 5,
      quantity: 0,
    },
  ];

  tagType?: string;
}
