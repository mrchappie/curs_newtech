import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements AfterViewInit {
  @ViewChild('ref')
  myParagraph!: ElementRef;

  @ViewChildren('list')
  myLists!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log(this.myParagraph);
    console.log(this.myLists);
  }
}
