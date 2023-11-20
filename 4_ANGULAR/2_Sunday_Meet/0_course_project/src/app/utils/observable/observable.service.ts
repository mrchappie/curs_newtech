import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor() {}

  private mockData: string[] = ['Alex', 'Maria', 'Lucia'];

  addItem(item: string): Observable<string[]> {
    this.mockData.push(item);
    return of(this.mockData).pipe(delay(1000));
  }

  editItem(index: number, item: string): Observable<string[]> {
    if (index >= 0 && index < this.mockData.length) {
      this.mockData[index] = item;
    }
    return of(this.mockData).pipe(delay(1000));
  }

  getData(): Observable<string[]> {
    return of(this.mockData).pipe(delay(1000));
  }
}
