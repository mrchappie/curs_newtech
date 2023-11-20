import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleComponent } from './lifecycle.component';

describe('LifecyleComponent', () => {
  let component: LifecyleComponent;
  let fixture: ComponentFixture<LifecyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecyleComponent],
    });
    fixture = TestBed.createComponent(LifecyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
