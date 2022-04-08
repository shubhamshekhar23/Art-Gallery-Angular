import { TestBed } from '@angular/core/testing';

import { DepartmentArtStateService } from './department-art-state.service';

describe('DepartmentArtStateService', () => {
  let service: DepartmentArtStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentArtStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
