import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Exists } from '../model/account.model';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  hasEmail(email: string): Observable<Exists> {
    const url = environment.apiUrl + 'account/verify-email';
    const params = new HttpParams().set('email', email);

    return this.httpClient.get<Exists>(url, {'params': params});
  }

  hasAccount(account: string): Observable<Exists> {
    const url = environment.apiUrl + 'account/verify-account';
    const params = new HttpParams().set('login', account);

    return this.httpClient.get<Exists>(url, {'params': params});
  }
}
