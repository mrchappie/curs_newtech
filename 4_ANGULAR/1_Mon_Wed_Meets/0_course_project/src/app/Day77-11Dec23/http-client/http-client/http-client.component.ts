import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent {
  private baseURL =
    'https://learn-ang-3a987-default-rtdb.europe-west1.firebasedatabase.app';
  fetchData(endPoint: string) {
    const url = `${this.baseURL}/${endPoint}.json`;
    console.log('Fetching:', url);
  }
}
