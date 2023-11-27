import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  constructor(private router: Router, private currentRouter: ActivatedRoute) {}

  backToHome() {
    this.router.navigate(['programatically'], {
      relativeTo: this.currentRouter,
    });
  }
}
