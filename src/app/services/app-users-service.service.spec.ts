import { TestBed } from '@angular/core/testing';

import { AppUsersServiceService } from './app-users-service.service';

describe('AppUsersServiceService', () => {
  let service: AppUsersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUsersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
