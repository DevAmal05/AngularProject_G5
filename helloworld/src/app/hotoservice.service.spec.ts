import { TestBed } from '@angular/core/testing';

import { HotoserviceService } from './hotoservice.service';

describe('HotoserviceService', () => {
  let service: HotoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
