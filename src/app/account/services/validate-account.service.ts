import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { Exists } from '../model/exists.model';

@Injectable()
export class ValidateAccountService {

  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient, private accountService: AccountService) {}

  validateConfirmPassword(input: FormControl): {[key: string]: boolean} {
    if (input.parent !== undefined) {
      let password = input.parent.get('password').value;
      let confirmPassword = input.value;
      if (password !== confirmPassword) {
        return {'confirmPassword': true};
      }
    }
    return null;
  }

  validateNewPassword(input: FormControl): {[key: string]: boolean} {
    if (input.parent !== undefined && input.value !== null) {
      let currentPassword = input.parent.get('current-password').value;
      let newPassword = input.value;
      if (currentPassword === newPassword) {
        return {'newPassword': true};
      }
    }
    return null;
  }

  validateCurrentPassword(input: FormControl): Observable<any> {
    let url = 'http://www.mocky.io/v2/5ac11c1d2f00005e009611e2';

    return this.httpClient.post<{password: string}>(url, {password: input.value}, {headers: this.headers}).pipe(
      map((response) => {
        if (response.password === '') {
          return {currentPassword: true};
        }
        return null;
      })
    );
  }

  validateEmailExists(input: FormControl): Observable<any> {
    return this.accountService.hasEmail(input.value).pipe(
      map((response: Exists) => {
        if (response.exists === true) {
          return { emailExists: true };
        }
        return null;
      })
    );
  }

  validateEmailNotExists(input: FormControl): Observable<any> {
    return this.accountService.hasEmail(input.value).pipe(
      map((response: Exists) => {
        if (response.exists === false) {
          return { emailNotExists: true };
        }
        return null;
      })
    );
  }

  validateAccount(input: FormControl): Observable<any> {
    return this.accountService.hasAccount(input.value).pipe(
      map((response: Exists) => {
        if (response.exists === true) {
          return {accountExists: true};
        }
        return null;
      })
    );
  }

}
