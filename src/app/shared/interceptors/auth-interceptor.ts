import { HttpInterceptorFn } from '@angular/common/http';
import { Authservice } from '../services/authservice';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(Authservice);
  const token = authService.token;
  if (token) {

    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }


  return next(req);
};
