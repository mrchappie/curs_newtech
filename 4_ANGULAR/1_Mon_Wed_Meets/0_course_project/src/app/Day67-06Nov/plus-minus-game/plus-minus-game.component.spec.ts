import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusGameComponent } from './plus-minus-game.component';

describe('PlusMinusGameComponent', () => {
  let component: PlusMinusGameComponent;
  let fixture: ComponentFixture<PlusMinusGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusMinusGameComponent]
    });
    fixture = TestBed.createComponent(PlusMinusGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
