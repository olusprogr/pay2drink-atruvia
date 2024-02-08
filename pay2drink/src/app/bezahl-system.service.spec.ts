import { TestBed } from '@angular/core/testing';

import { BezahlSystemService } from './bezahl-system.service';

describe('BezahlSystemService', () => {
  let service: BezahlSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BezahlSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
