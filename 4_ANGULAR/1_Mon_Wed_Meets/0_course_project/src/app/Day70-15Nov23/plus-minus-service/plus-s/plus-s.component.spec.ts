import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusSComponent } from './plus-s.component';

describe('PlusSComponent', () => {
  let component: PlusSComponent;
  let fixture: ComponentFixture<PlusSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusSComponent]
    });
    fixture = TestBed.createComponent(PlusSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
