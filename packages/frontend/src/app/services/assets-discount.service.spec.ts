import { TestBed } from '@angular/core/testing';

import { AssetsDiscountService } from './assets-discount.service';

describe('AssetsDiscountService', () => {
  let service: AssetsDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
