import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input('idOfParent')
  parentId!: number;

  @Output('onIdRefreshed')
  idRefreshedEmmiter = new EventEmitter<number>();

  protected id = Math.trunc(Math.random() * 10 ** 3);

  refreshId() {
    this.id = Math.trunc(Math.random() * 10 ** 3);

    this.idRefreshedEmmiter.emit(this.id);
  }
}
