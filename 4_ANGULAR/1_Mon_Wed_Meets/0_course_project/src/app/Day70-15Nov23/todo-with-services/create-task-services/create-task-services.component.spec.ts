import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskServicesComponent } from './create-task-services.component';

describe('CreateTaskServicesComponent', () => {
  let component: CreateTaskServicesComponent;
  let fixture: ComponentFixture<CreateTaskServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskServicesComponent]
    });
    fixture = TestBed.createComponent(CreateTaskServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
