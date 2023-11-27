import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrisedComponent } from './parametrised.component';

describe('ParametrisedComponent', () => {
  let component: ParametrisedComponent;
  let fixture: ComponentFixture<ParametrisedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrisedComponent]
    });
    fixture = TestBed.createComponent(ParametrisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
