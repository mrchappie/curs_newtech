import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogImage } from 'src/app/pages/userprofile/userprofile.component';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService implements OnInit {
  constructor(private http: HttpClient) {}

  apiData: any = { message: '', status: '' };

  ngOnInit(): void {
    // this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(
    //   (data) => {
    //     this.apiData.push(data);
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log('Error fetching data', error);
    //   }
    // );
  }

  fetchData(url: string) {
    this.http.get(url).subscribe(
      (data) => {
        this.apiData = data;
        console.log(this.apiData);
      },
      (error) => {
        console.log('Error fetching data', error);
      }
    );
  }
}
