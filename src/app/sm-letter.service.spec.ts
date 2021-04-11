import { TestBed } from '@angular/core/testing';

import { SmLetterService } from './sm-letter.service';

describe('SmLetterService', () => {
  let service: SmLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
