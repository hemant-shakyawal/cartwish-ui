import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from '../services/authservice';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Authservice);
  const router = inject(Router);

  // If authenticated, allow the user to proceed
  if (authService.isAuthenticated()) {
    return true;
  }

  // If NOT authenticated, redirect to the login page
  return router.parseUrl('/login');
};