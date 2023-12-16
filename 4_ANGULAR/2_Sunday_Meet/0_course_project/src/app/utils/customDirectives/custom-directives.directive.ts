import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]',
})
export class CustomDirectivesDirective {
  @Input() textColor: string = 'blue';
  @Input() borderD: string = '2px solid blue';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(this.el.nativeElement, 'border', this.borderD);
  }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.value.length < 5) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    }
  }
}
