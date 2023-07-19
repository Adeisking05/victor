import { TestBed } from '@angular/core/testing';

import { FetchfromserverService } from './fetchfromserver.service';

describe('FetchfromserverService', () => {
  let service: FetchfromserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchfromserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
