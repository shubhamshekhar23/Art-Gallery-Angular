import { TestBed } from '@angular/core/testing';

import { ArtObjectService } from './art-object.service';

describe('ArtObjectService', () => {
  let service: ArtObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
