import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authenticate, User } from '../models/auth';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class  AuthService {
  constructor(private http: HttpClient) {}

  login(user: Authenticate): Observable<User> {
    const url = environment.apiUrl + 'auth';
    const headers = new HttpHeaders();

    return this.http.post<User>(url, user, {headers: headers});
  }
}
