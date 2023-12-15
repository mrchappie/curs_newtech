import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFirebaseComponent } from './todo-firebase.component';

describe('TodoFirebaseComponent', () => {
  let component: TodoFirebaseComponent;
  let fixture: ComponentFixture<TodoFirebaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFirebaseComponent]
    });
    fixture = TestBed.createComponent(TodoFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
