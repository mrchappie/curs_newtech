import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy1Component } from './diy1.component';

describe('Diy1Component', () => {
  let component: Diy1Component;
  let fixture: ComponentFixture<Diy1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diy1Component]
    });
    fixture = TestBed.createComponent(Diy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
