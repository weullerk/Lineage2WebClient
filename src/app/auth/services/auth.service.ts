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
    const url = environment.apiUrl + 'login';
    const options = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
    };
    const data = {username: user.username, password: user.password};

    return this.http.post<User>(url, data);
  }
}
