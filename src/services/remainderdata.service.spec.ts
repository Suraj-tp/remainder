import { TestBed } from '@angular/core/testing';

import { RemainderdataService } from './remainderdata.service';

describe('RemainderdataService', () => {
  let service: RemainderdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemainderdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
