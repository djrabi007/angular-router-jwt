import { TestBed } from '@angular/core/testing';

import { GarageResolverService } from './garage-resolver.service';

describe('GarageResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarageResolverService = TestBed.get(GarageResolverService);
    expect(service).toBeTruthy();
  });
});
