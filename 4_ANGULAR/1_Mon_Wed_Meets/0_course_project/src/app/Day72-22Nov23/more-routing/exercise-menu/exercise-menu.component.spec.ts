import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseMenuComponent } from './exercise-menu.component';

describe('ExerciseMenuComponent', () => {
  let component: ExerciseMenuComponent;
  let fixture: ComponentFixture<ExerciseMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseMenuComponent]
    });
    fixture = TestBed.createComponent(ExerciseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
