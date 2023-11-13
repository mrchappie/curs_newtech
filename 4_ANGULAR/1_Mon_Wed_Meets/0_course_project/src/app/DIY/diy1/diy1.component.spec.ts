import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIY1Component } from './diy1.component';

describe('DIY1Component', () => {
  let component: DIY1Component;
  let fixture: ComponentFixture<DIY1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DIY1Component]
    });
    fixture = TestBed.createComponent(DIY1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
