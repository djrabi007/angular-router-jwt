import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpInterceptorServiceService } from './basic-auth-http-interceptor-service.service';

describe('BasicAuthHttpInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHttpInterceptorServiceService = TestBed.get(BasicAuthHttpInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
