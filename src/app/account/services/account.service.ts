import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Email } from '../model/account.model';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  hasEmail(email: string): Observable<Email> {
    const url = environment.apiUrl + 'hasEmail';
    const params = new HttpParams().set('email', email);

    return this.httpClient.get<Email>(url, {'params': params});
  }
}
