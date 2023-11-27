import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseServerComponent } from './exercise-server.component';

describe('ExerciseServerComponent', () => {
  let component: ExerciseServerComponent;
  let fixture: ComponentFixture<ExerciseServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseServerComponent]
    });
    fixture = TestBed.createComponent(ExerciseServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
