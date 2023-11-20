import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoExComponent } from './todo-ex.component';

describe('TodoExComponent', () => {
  let component: TodoExComponent;
  let fixture: ComponentFixture<TodoExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoExComponent]
    });
    fixture = TestBed.createComponent(TodoExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
