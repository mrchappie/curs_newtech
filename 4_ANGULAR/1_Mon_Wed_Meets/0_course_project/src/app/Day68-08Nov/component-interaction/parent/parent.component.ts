import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentId = Math.trunc(Math.random() * 10 ** 6);

  childId?: number;

  updateChildId(newId: number) {
    this.childId = newId;
  }
}
