import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy2Component } from './diy2.component';

describe('Diy2Component', () => {
  let component: Diy2Component;
  let fixture: ComponentFixture<Diy2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diy2Component]
    });
    fixture = TestBed.createComponent(Diy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
