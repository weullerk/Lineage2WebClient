import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateAccountService } from '../../services/validate-account.service';
import {AccountService} from '../../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../../../shared/model/message';
import { ApiResponse, ApiResponseError } from '../../../shared/model/api-response';

@Component({
  selector: 'app-account-update-password',
  templateUrl: './account-update-password.html'
})
export class AccountUpdatePasswordComponent implements OnInit {
  form: FormGroup;
  message: Message | null;

  constructor(private validateAccountService: ValidateAccountService,
              private accountService: AccountService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ], this.validateAccountService.validateEmailNotExists.bind(this.validateAccountService)),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9]+/)]),
      'confirm-password': new FormControl(null, this.validateAccountService.validateConfirmPassword)
    });

    this.form.get('password').valueChanges.subscribe(() => {
      this.form.get('confirm-password').updateValueAndValidity();
    });
  }

  onSubmit() {
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');
    const formData = this.form.value;
    const data = {
      email: formData.email,
      password: formData.password,
      confirm_password: formData['confirm-password']
    };

    if (!token) {
      this.router.navigate(['/']);
    }

    this.accountService.updatePassword(token, data)
      .subscribe((response: ApiResponse) => {
        this.message = { message: response.message, type: 'success' };
        this.onReset();
      }, (response: ApiResponseError) => {
        this.message = { message: response.error, type: 'warning' };
      });
  }

  onReset() {
    this.form.reset();
  }

  onMessageClose(messageClosed: boolean): void {
    this.message = null;
  }
}
