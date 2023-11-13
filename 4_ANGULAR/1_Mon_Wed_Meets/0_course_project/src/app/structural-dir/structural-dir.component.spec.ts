import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirComponent } from './structural-dir.component';

describe('StructuralDirComponent', () => {
  let component: StructuralDirComponent;
  let fixture: ComponentFixture<StructuralDirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralDirComponent]
    });
    fixture = TestBed.createComponent(StructuralDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
