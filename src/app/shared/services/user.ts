import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from '../../shared/models/user';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class User {
  http = inject(HttpClient);

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.apiUrl}/user`, user);
  }

  getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/user`);
  }
}
