import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExerciseComponent } from './reactive-forms-exercise.component';

describe('ReactiveFormsExerciseComponent', () => {
  let component: ReactiveFormsExerciseComponent;
  let fixture: ComponentFixture<ReactiveFormsExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsExerciseComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
