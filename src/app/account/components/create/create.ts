import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateAccountService } from '../../services/validate-account.service';
import { AccountService } from '../../services/account.service';
import { ApiResponse, ApiResponseError } from '../../../shared/model/api-response';
import { Account } from '../../model/account.model';
import { Message } from '../../../shared/model/message';

@Component({
  selector: 'app-account-create',
  templateUrl: './create.html'
})
export class AccountCreateComponent implements OnInit {
  form: FormGroup;
  message: Message | null;

  constructor(private validateAccountService: ValidateAccountService,
              private accountService: AccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
        this.validateAccountService.validateAccount.bind(this.validateAccountService)),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'confirm-password': new FormControl(null, this.validateAccountService.validateConfirmPassword),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ], this.validateAccountService.validateEmailExists.bind(this.validateAccountService))
    });

    this.form.get('password').valueChanges.subscribe(() => {
      this.form.get('confirm-password').updateValueAndValidity();
    });
  }

  onSubmit() {
    const formData = this.form.value;

    const accountModel: Account = {
      login: formData.login,
      password: formData.password,
      confirm_password: formData['confirm-password'],
      email: formData.email
    };

    this.accountService.createAccount(accountModel)
      .subscribe((response: ApiResponse) => {
        this.message = { message: response.message, type: 'success' };
      }, (response: ApiResponseError) => {
        this.message = { message: response.error, type: 'warning' };
      });
  }

  onReset() {
    this.form.reset();
  }

  onCloseMessage(messageClosed: boolean) {
    this.message = null;
  }
}
