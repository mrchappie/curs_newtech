import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemServicesComponent } from './task-item-services.component';

describe('TaskItemServicesComponent', () => {
  let component: TaskItemServicesComponent;
  let fixture: ComponentFixture<TaskItemServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemServicesComponent]
    });
    fixture = TestBed.createComponent(TaskItemServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
