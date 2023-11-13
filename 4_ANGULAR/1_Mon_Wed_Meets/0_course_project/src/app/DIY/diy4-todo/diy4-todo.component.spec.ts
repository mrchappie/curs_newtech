import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy4TodoComponent } from './diy4-todo.component';

describe('Diy4TodoComponent', () => {
  let component: Diy4TodoComponent;
  let fixture: ComponentFixture<Diy4TodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diy4TodoComponent]
    });
    fixture = TestBed.createComponent(Diy4TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
