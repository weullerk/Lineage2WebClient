import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-update-password',
  templateUrl: './account-update-password.html'
})
export class AccountUpdatePasswordComponent {
  form: FormGroup;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9]+/)]),
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
