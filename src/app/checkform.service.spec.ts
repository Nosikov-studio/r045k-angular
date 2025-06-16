import { TestBed } from '@angular/core/testing';

import { CheckformService } from './checkform.service';

describe('CheckformService', () => {
  let service: CheckformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
