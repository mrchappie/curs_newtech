import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySComponent } from './display-s.component';

describe('DisplaySComponent', () => {
  let component: DisplaySComponent;
  let fixture: ComponentFixture<DisplaySComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySComponent]
    });
    fixture = TestBed.createComponent(DisplaySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
