import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { authGuard } from './auth-guard';
import { Authservice } from '../services/authservice';

describe('authGuard', () => {
  let mockAuthService: any;
  let mockRouter: any;

  beforeEach(() => {
    mockAuthService = {
      isAuthenticated: vi.fn(),
    };

    mockRouter = {
      parseUrl: vi.fn().mockReturnValue({} as UrlTree),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Authservice, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    });
  });

  const runGuard = () =>
    TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
    );

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow activation if user is authenticated', () => {
    mockAuthService.isAuthenticated.mockReturnValue(true);

    const result = runGuard();

    expect(result).toBe(true);
  });

  it('should redirect to login if user is not authenticated', () => {
    mockAuthService.isAuthenticated.mockReturnValue(false);

    const result = runGuard();

    expect(result).toBeInstanceOf(Object); // UrlTree
    expect(mockRouter.parseUrl).toHaveBeenCalledWith('/login');
  });
});
