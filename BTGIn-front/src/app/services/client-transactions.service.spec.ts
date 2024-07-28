import { TestBed } from '@angular/core/testing';

import { ClientTransactionsService } from './client-transactions.service';

describe('ClientTransactionsService', () => {
  let service: ClientTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
