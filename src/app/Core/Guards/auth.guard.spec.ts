import { TestBed } from '@angular/core/testing';

import { auth } from './auth.guard';

describe('AuthGuard', () => {
  let guard: typeof auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(auth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
