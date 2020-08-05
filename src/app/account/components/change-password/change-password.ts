import { Component, OnInit } from '@angular/core';
import { ValidateAccountService } from '../../services/validate-account.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers/auth';
import {map} from 'rxjs/operators';
import {AccountService} from '../../services/account.service';
import {ApiResponse, ApiResponseError} from '../../../shared/model/api-response';
import {Message} from '../../../shared/model/message';
import * as fromApp from '../../../reducers/app';
import * as AuthActions from '../../../auth/actions/auth';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './change-password.html'
})
export class AccountChangePasswordComponent implements OnInit {
  private form: FormGroup;
  private token: string;
  message: Message | null;

  constructor(private validateAccountService: ValidateAccountService,
              private accountService: AccountService,
              private store: Store<fromAuth.State>,
              private appStore: Store<fromApp.State>) {}

  ngOnInit() {
    this.store.pipe(
      select(fromAuth.getUser),
      map(user => user)
    ).subscribe((user) => this.token = user.token);

    this.form = new FormGroup({
      'current-password': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ], this.validateAccountService.validateCurrentPassword.bind(this.validateAccountService)),
      'password': new FormControl( null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/),
        this.validateAccountService.validateNewPassword
      ]),
      'confirm-password': new FormControl(null, this.validateAccountService.validateConfirmPassword)
    });

    this.form.get('password').valueChanges.subscribe(() => {
      this.form.get('confirm-password').updateValueAndValidity();
    });
  }

  onSubmit() {
    const data = {
      old_password: this.form.value['current-password'],
      new_password: this.form.value['password'],
      confirm_password: this.form.value['confirm-password']
    };

    this.accountService.changePassword(this.token, data)
      .subscribe((response: ApiResponse) => {
        this.message = { message: response.message, type: 'success' };
        this.store.dispatch(new AuthActions.Logout());
      }, (response: ApiResponseError) => {
        this.message = { message: response.error, type: 'warning' };
      });

  }

  onReset() {
    this.form.reset();
  }

  onMessageClose(messageClosed: boolean) {
    this.message = null;
  }
}
