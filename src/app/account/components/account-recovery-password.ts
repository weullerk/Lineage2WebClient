import {Component, OnInit} from '@angular/core';
import { AccountService } from '../services/account.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-recovery-password',
  templateUrl: './account-recovery-password.html'
})
export class AccountRecoveryPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    console.log(this.form);
  }
}
