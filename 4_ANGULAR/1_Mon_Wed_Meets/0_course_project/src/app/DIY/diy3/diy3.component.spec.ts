import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy3Component } from './diy3.component';

describe('Diy3Component', () => {
  let component: Diy3Component;
  let fixture: ComponentFixture<Diy3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diy3Component]
    });
    fixture = TestBed.createComponent(Diy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
