import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component {
  @Input() childItems: string[] = [];

  @Output() modifiedItems = new EventEmitter<string[]>();

  sendModifiedItem() {
    const newItems = this.childItems.map((item) => item + 2);

    this.modifiedItems.emit(newItems);
  }
}
