import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRoutingComponent } from './more-routing.component';

describe('MoreRoutingComponent', () => {
  let component: MoreRoutingComponent;
  let fixture: ComponentFixture<MoreRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreRoutingComponent]
    });
    fixture = TestBed.createComponent(MoreRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
