import { Component } from '@angular/core';
import { DogService } from '../../../utils/services/dogService/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent {
  randomDogImgUrl: string = '';
  breed: string = '';
  images: string[] = [];
  subBreeds: string[] = [];
  constructor(private dog: DogService) {}

  handleGetRandomImg() {
    this.dog.getRandomDogImg().subscribe((response: any) => {
      if (response && response.message) {
        this.randomDogImgUrl = response.message;
      }
    });
  }
  handleGetBreedImages() {
    this.dog.getBreedImages(this.breed).subscribe((response: any) => {
      if (response && response.message) {
        this.images = response.message;
      }
    });
  }
  handleGetSubBreedList() {
    this.dog.getSubBreedList(this.breed).subscribe((response: any) => {
      if (response && response.message) {
        this.subBreeds = response.message;
      }
    });
  }
  handleGetRandomBreedImg() {
    this.dog.getRandomBreedImg(this.breed).subscribe((response: any) => {
      if (response && response.message) {
        this.randomDogImgUrl = response.message;
      }
    });
  }
}
