import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleChildComponent } from './lifecycle-child.component';

describe('LifecyleChildComponent', () => {
  let component: LifecyleChildComponent;
  let fixture: ComponentFixture<LifecyleChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecyleChildComponent],
    });
    fixture = TestBed.createComponent(LifecyleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
