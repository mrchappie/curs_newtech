import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExerciseComponent } from './pipes-exercise.component';

describe('PipesExerciseComponent', () => {
  let component: PipesExerciseComponent;
  let fixture: ComponentFixture<PipesExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesExerciseComponent]
    });
    fixture = TestBed.createComponent(PipesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
