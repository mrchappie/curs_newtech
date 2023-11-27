import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusServiceComponent } from './plus-minus-service.component';

describe('PlusMinusServiceComponent', () => {
  let component: PlusMinusServiceComponent;
  let fixture: ComponentFixture<PlusMinusServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusMinusServiceComponent]
    });
    fixture = TestBed.createComponent(PlusMinusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
