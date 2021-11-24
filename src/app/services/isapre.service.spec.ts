import { TestBed } from '@angular/core/testing';

import { IsapreService } from './isapre.service';

describe('IsapreService', () => {
  let service: IsapreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsapreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
