import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { rerouteGuard } from './reroute.guard';

describe('rerouteGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rerouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
