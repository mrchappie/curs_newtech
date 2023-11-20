import {
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Directive,
} from '@angular/core';

@Directive()
export abstract class LifecycleEntity
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  protected tag!: string;

  ngOnInit(): void {
    console.log(`${this.tag}: OnInit`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`${this.tag}: OnChanges`);
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log(`${this.tag}: DoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`${this.tag}: AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`${this.tag}: AfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.tag}: AfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.tag}: AfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`${this.tag}: OnDestroy`);
  }
}
