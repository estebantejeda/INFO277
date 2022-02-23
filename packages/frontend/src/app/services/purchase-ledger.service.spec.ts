import { TestBed } from '@angular/core/testing';

import { PurchaseLedgerService } from './purchase-ledger.service';

describe('PurchaseLedgerService', () => {
  let service: PurchaseLedgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseLedgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
