import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListServicesComponent } from './task-list-services.component';

describe('TaskListServicesComponent', () => {
  let component: TaskListServicesComponent;
  let fixture: ComponentFixture<TaskListServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListServicesComponent]
    });
    fixture = TestBed.createComponent(TaskListServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
