import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/utils/services/dataService/data-service.service';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss'],
})
export class FilterPageComponent {
  users: string[] = [
    'Alex',
    'Ionel',
    'Ion',
    'Mircea',
    'Maria',
    'Andreea',
    'Lucia',
    'Marcel',
    'Vasile',
    'Nicu',
  ];

  query: string = '';

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  deleteItem(index: number) {
    this.users.splice(index, 1);
  }

  navigate(item: string) {
    this.router.navigate(['/user-info', item]);
    this.dataService.setData(this.users);
  }
}
