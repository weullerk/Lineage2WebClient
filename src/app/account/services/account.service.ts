import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AccountService {

  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  checkIfEmailExists(email: string): Observable<{email: string}> {
    let success = 'http://www.mocky.io/v2/5abda5c02f00006100e6c362';
    let failure = 'http://www.mocky.io/v2/5abdb2b62f00005a00e6c378';

    return this.httpClient.post<{email: string}>(success, {email: email}, {headers: this.headers});
  }

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
      console.log(currentPassword, newPassword);
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
          return {currentPassword: true}
        }
        return null;
      })
    );
  }

  validateEmail(input: FormControl): Observable<any> {
    return this.checkIfEmailExists(input.value).pipe(
      map((response) => {
        if (response.email !== '') {
          return {emailExist: true}
        }
        return null;
      })
    );
  }

}
