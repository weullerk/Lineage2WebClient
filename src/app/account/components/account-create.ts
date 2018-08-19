import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.html'
})
export class AccountCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'login': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'confirm-password': new FormControl(null, this.accountService.validateConfirmPassword),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ], this.accountService.validateEmail.bind(this.accountService))
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
