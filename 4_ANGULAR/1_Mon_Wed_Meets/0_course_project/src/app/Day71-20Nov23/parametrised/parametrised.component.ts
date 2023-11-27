import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametrised',
  templateUrl: './parametrised.component.html',
  styleUrls: ['./parametrised.component.scss'],
})
export class ParametrisedComponent implements OnInit {
  productId: string = '';
  productName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.productName = this.route.snapshot.params['productName'];

    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
      this.productName = params['productName'];
    });
  }
}
