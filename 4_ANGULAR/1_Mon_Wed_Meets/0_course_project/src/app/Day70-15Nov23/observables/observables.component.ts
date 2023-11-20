import { Component } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent {
  activeSubscription?: Subscription;

  generatePromise() {
    new Promise<number>(
      (resolve: (value: number) => void, reject: (e: Error) => void) => {
        setTimeout(resolve, 3000, 1);
        setTimeout(resolve, 4000, 1);
        setTimeout(resolve, 5000, 1);
      }
    )
      .then((value) => console.log('Promise', value, 'at: ', new Date()))
      .catch((error) => console.log('Error', error.message, 'at: ', new Date()))
      .finally(() => console.log('Promised finshed at: ', new Date()));
  }

  generateObservable() {
    const obs = new Observable<number | string>(
      (subscriber: Subscriber<number | string>) => {
        subscriber.next('A');

        setTimeout(() => subscriber.next('B'), 1000);
        setTimeout(() => subscriber.next(0), 2000);
        setTimeout(() => subscriber.next(1), 3000);
        setTimeout(() => subscriber.next(2), 4000);
        setTimeout(() => subscriber.next('C'), 5000);
        setTimeout(() => subscriber.complete(), 6000);

        setTimeout(
          () => subscriber.error(new Error('Unexpected issue')),
          Math.trunc(Math.random() * 10 + 1) * 1000
        );
      }
    );

    this.activeSubscription = obs.subscribe({
      next(value) {
        console.log('Got', value, 'at: ', new Date());
      },
      error(error) {
        console.error('Got', error.message, 'at: ', new Date());
      },
      complete() {
        console.warn('Observables finished at: ', new Date());
      },
    });
  }

  cancelSubscription() {
    this.activeSubscription?.unsubscribe();
  }
}
