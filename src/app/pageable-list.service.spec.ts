import { TestBed } from '@angular/core/testing';

import { PageableListService } from './pageable-list.service';

describe('PageableListService', () => {
  let service: PageableListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageableListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
