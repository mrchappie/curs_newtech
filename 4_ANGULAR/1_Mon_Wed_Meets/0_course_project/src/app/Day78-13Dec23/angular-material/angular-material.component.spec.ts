import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialComponent } from './angular-material.component';

describe('AngularMaterialComponent', () => {
  let component: AngularMaterialComponent;
  let fixture: ComponentFixture<AngularMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
