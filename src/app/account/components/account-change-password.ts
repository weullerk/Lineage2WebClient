import {Component, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.html'
})
export class AccountChangePasswordComponent implements OnInit {
  private form: FormGroup;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'current-password': new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]+/)
      ], this.accountService.validateCurrentPassword.bind(this.accountService)),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9]+/), this.accountService.validateNewPassword]),
      'confirm-password': new FormControl(null, this.accountService.validateConfirmPassword)
    });

    this.form.get('password').valueChanges.subscribe(() => {
      this.form.get('confirm-password').updateValueAndValidity();
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  onReset() {
    this.form.reset();
  }
}
