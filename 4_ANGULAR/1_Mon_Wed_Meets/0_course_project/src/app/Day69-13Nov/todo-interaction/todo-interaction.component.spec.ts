import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInteractionComponent } from './todo-interaction.component';

describe('TodoInteractionComponent', () => {
  let component: TodoInteractionComponent;
  let fixture: ComponentFixture<TodoInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoInteractionComponent]
    });
    fixture = TestBed.createComponent(TodoInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
