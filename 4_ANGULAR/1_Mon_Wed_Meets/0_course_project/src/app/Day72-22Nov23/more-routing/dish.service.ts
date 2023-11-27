import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishById(id: number) {
    return this.dishes[id];
  }

  readonly dishes: Dish[] = [
    {
      name: 'Bruschetta',
      quantity: 1,
      price: 8.99,
      ingredients: ['Tomatoes', 'Basil', 'Garlic', 'Baguette'],
    },
    {
      name: 'Spinach Artichoke Dip',
      quantity: 1,
      price: 7.99,
      ingredients: ['Spinach', 'Artichokes', 'Cream Cheese', 'Tortilla Chips'],
    },
    {
      name: 'Mozzarella Sticks',
      quantity: 1,
      price: 6.99,
      ingredients: ['Mozzarella Cheese', 'Breadcrumbs', 'Marinara Sauce'],
    },
    {
      name: 'Grilled Salmon',
      quantity: 1,
      price: 18.99,
      ingredients: ['Salmon', 'Lemon', 'Herbs', 'Butter'],
    },
    // {
    //   name: 'Chicken Alfredo',
    //   quantity: 1,
    //   price: 16.99,
    //   ingredients: ['Chicken', 'Fettuccine', 'Alfredo Sauce'],
    // },
    // {
    //   name: 'Vegetarian Stir-Fry',
    //   quantity: 1,
    //   price: 14.99,
    //   ingredients: ['Tofu', 'Vegetables', 'Soy Sauce', 'Rice'],
    // },
    // {
    //   name: 'Chocolate Lava Cake',
    //   quantity: 1,
    //   price: 6.99,
    //   ingredients: ['Chocolate', 'Flour', 'Sugar', 'Vanilla Ice Cream'],
    // },
    // {
    //   name: 'New York Cheesecake',
    //   quantity: 1,
    //   price: 5.99,
    //   ingredients: ['Cream Cheese', 'Graham Cracker Crust', 'Vanilla Extract'],
    // },
    // {
    //   name: 'Fruit Sorbet',
    //   quantity: 1,
    //   price: 4.99,
    //   ingredients: ['Assorted Fruits', 'Sugar', 'Lemon Juice'],
    // },
  ];
}

export interface Dish {
  name: string;
  quantity: number;
  price: number;
  ingredients: string[];
}
