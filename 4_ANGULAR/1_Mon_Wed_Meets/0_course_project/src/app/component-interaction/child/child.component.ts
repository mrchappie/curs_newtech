import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input('parentId')
  parentId!: number;

  protected id = Math.trunc(Math.random() * 100 ** 3);

  refreshId() {
    this.id = Math.trunc(Math.random() * 100 ** 3);
  }
}
