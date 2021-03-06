import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Exists } from '../model/exists.model';
import { ApiResponse } from '../../shared/model/api-response';

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

  createAccount(accountData: any): Observable<ApiResponse> {
    const url = environment.apiUrl + 'account/create';

    return this.httpClient.post<ApiResponse>(url, accountData);
  }

  recoveryPassword(emailData: any): Observable<ApiResponse> {
    const url = environment.apiUrl + 'account/recovery-password';

    return this.httpClient.post<ApiResponse>(url, emailData);
  }

  updatePassword(token: string, passwordData: any): Observable<ApiResponse> {
    const url = environment.apiUrl + 'account/reset-password';
    const params = new HttpParams().set('token', token);

    return this.httpClient.post<ApiResponse>(url, passwordData, { params: params });
  }

  changePassword(token, passwordData): Observable<ApiResponse> {
    const url = environment.apiUrl + 'account/change-password';
    const header = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + token
      });

    return this.httpClient.post<ApiResponse>(url, passwordData, { headers: header });
  }
}
