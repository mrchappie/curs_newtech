import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from 'src/app/utils/services/state/state.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() childItems: string[] = [];

  @Output() modifiedItems = new EventEmitter<string[]>();

  firstName: string = '';

  constructor(private state: StateService) {}

  sendModifiedItem() {
    const newItems = this.childItems.sort();

    this.modifiedItems.emit(newItems);
  }

  setState() {
    this.state.setState({ firstName: this.firstName });
  }
}
