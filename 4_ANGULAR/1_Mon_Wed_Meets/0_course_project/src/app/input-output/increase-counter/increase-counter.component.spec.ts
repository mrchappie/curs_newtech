import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseCounterComponent } from './increase-counter.component';

describe('IncreaseCounterComponent', () => {
  let component: IncreaseCounterComponent;
  let fixture: ComponentFixture<IncreaseCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncreaseCounterComponent]
    });
    fixture = TestBed.createComponent(IncreaseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
