import { TestBed } from '@angular/core/testing';

import { PointCounterService } from './point-counter.service';

describe('PointCounterService', () => {
  let service: PointCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
