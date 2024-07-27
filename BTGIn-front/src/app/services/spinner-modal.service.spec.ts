import { TestBed } from '@angular/core/testing';

import { SpinnerModalService } from './spinner-modal.service';

describe('SpinnerModalService', () => {
  let service: SpinnerModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
