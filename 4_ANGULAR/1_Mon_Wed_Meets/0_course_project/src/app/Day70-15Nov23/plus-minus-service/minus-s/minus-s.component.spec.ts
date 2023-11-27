import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusSComponent } from './minus-s.component';

describe('MinusSComponent', () => {
  let component: MinusSComponent;
  let fixture: ComponentFixture<MinusSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinusSComponent]
    });
    fixture = TestBed.createComponent(MinusSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
