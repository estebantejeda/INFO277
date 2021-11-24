import { TestBed } from '@angular/core/testing';

import { AfpService } from './afp.service';

describe('AfpService', () => {
  let service: AfpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
