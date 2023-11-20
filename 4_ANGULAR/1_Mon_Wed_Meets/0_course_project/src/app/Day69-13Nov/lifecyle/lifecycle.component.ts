import { Component } from '@angular/core';
import { LifecycleEntity } from './lifecycle-comp';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecyleComponent extends LifecycleEntity {
  input = 'Input';
  isChildVisible: boolean = true;

  constructor() {
    super();
    this.tag = 'Parent';
  }

  onOutput() {
    console.log('Child Event!');
  }
}
