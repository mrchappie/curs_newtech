import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWithServicesComponent } from './todo-with-services.component';

describe('TodoWithServicesComponent', () => {
  let component: TodoWithServicesComponent;
  let fixture: ComponentFixture<TodoWithServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoWithServicesComponent]
    });
    fixture = TestBed.createComponent(TodoWithServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
