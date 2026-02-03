import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserModel } from '../models/user';
import { environment } from '../../../environments/environment.development';

interface LoginResponse {
  accessToken: string;
}
@Injectable({
  providedIn: 'root',
})
export class Authservice {
  http = inject(HttpClient);
  currentUser = signal<string | null>(null);
  isAuthenticated = signal<boolean>(!!localStorage.getItem('accessToken'));

  login(user: Pick<UserModel, 'email' | 'password'>) {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/user/login`,
      user,
      {
        withCredentials: true // ✅ REQUIRED for refreshToken cookie
      }
    ).pipe(
      tap(res => {
        localStorage.setItem('accessToken', res.accessToken);
        this.isAuthenticated.set(true);
      })
    );
  }

   logout() {
    localStorage.removeItem('accessToken');
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
  }
  get token() {
    return localStorage.getItem('accessToken');
  }
}
