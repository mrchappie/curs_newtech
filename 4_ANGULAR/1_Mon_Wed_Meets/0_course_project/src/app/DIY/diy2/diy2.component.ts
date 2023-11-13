import { Component } from '@angular/core';

@Component({
  selector: 'app-diy2',
  templateUrl: './diy2.component.html',
  styleUrls: ['./diy2.component.scss'],
})
export class Diy2Component {
  fullName?: string;
  city?: string;
  country?: string;

  joinedData: string = '';

  showPersonLocation() {
    if (this.fullName && this.city && this.country) {
      this.joinedData = `${this.fullName} is living in ${this.city}, ${this.country}`;
    }
    return this.joinedData;
  }
}
