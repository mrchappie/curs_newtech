import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOrdersComponent } from './exercise-orders.component';

describe('ExerciseOrdersComponent', () => {
  let component: ExerciseOrdersComponent;
  let fixture: ComponentFixture<ExerciseOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseOrdersComponent]
    });
    fixture = TestBed.createComponent(ExerciseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
