import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers/app';
import * as AuthActions from '../../../auth/actions/auth';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.html'
})
export class UserLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)])
    });
  }

  onSubmit() {
    this.store.dispatch(new AuthActions.Login(this.form.value));
  }

  onReset() {
    this.form.reset();
  }
}
