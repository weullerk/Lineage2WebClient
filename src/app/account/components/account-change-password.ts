import {Component, OnInit} from '@angular/core';
import { ValidateAccountService } from '../services/validate-account.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.html'
})
export class AccountChangePasswordComponent implements OnInit {
  private form: FormGroup;

  constructor(private validateAccountService: ValidateAccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'current-password': new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]+/)
      ], this.validateAccountService.validateCurrentPassword.bind(this.validateAccountService)),
      'password': new FormControl(
        null,
        [Validators.required, Validators.pattern(/[a-zA-Z0-9]+/), this.validateAccountService.validateNewPassword]
      ),
      'confirm-password': new FormControl(null, this.validateAccountService.validateConfirmPassword)
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
