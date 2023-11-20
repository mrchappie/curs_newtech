import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LifecycleEntity } from '../lifecycle-comp';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
})
export class LifecyleChildComponent extends LifecycleEntity {
  @Input()
  input!: string;

  @Output()
  output = new EventEmitter();

  onOutput() {
    return this.output;
  }

  constructor() {
    super();
    this.tag = 'Child';
  }
}
