import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithServicesComponent } from './counter-with-services.component';

describe('CounterWithServicesComponent', () => {
  let component: CounterWithServicesComponent;
  let fixture: ComponentFixture<CounterWithServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterWithServicesComponent]
    });
    fixture = TestBed.createComponent(CounterWithServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
