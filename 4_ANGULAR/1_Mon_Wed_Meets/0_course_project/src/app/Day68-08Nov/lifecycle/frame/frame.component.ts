import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
})
export class FrameComponent implements AfterContentInit {
  darkThemeEnabled = false;

  @ContentChild('contentRef')
  contentP!: ElementRef;

  @ContentChildren('button')
  contentButtons!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    console.log('contentP', this.contentP);
    console.log('contentButtons', this.contentButtons);
  }
}
