import { Component, OnInit } from '@angular/core';
import { Dish, DishService } from '../../dish.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  dish!: Dish;

  constructor(
    protected dishService: DishService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dish = this.dishService.getDishById(
      this.route.snapshot.params['dishId']
    );

    this.route.params.subscribe((params) => {
      this.dish = this.dishService.getDishById(params['dishId']);
    });
  }
}
