import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateAccountService } from '../../services/validate-account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './create.html'
})
export class AccountCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private validateAccountService: ValidateAccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
        this.validateAccountService.validateAccount.bind(this.validateAccountService)),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'confirm-password': new FormControl(null, this.validateAccountService.validateConfirmPassword),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ], this.validateAccountService.validateEmail.bind(this.validateAccountService))
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
