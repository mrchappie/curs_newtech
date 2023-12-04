import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private breed: string = '';

  private apiUrl = 'https://dog.ceo/api';
  private randomApiUrl = this.apiUrl + '/breeds/image/random';

  constructor(private http: HttpClient) {}

  getRandomDogImg() {
    return this.http.get(this.randomApiUrl);
  }

  getBreedImages(breed: string) {
    const breedApiUrl = this.apiUrl + '/breed/' + breed + '/images';

    return this.http.get(breedApiUrl);
  }

  getSubBreedList(breed: string) {
    const subBreedApiUrl = this.apiUrl + '/breed/' + breed + '/list';

    this.breed = breed;
    return this.http.get(subBreedApiUrl);
  }

  getRandomBreedImg(breed: string) {
    const browseBreedApiUrl =
      this.apiUrl + '/breed/' + breed + '/images/random';

    this.breed = breed;

    return this.http.get(browseBreedApiUrl);
  }
}
