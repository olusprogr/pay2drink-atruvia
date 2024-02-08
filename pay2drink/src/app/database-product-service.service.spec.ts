import { TestBed } from '@angular/core/testing';

import { DatabaseProductServiceService } from './database-product-service.service';

describe('DatabaseProductServiceService', () => {
  let service: DatabaseProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
