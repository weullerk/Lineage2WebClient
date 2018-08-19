import { Component } from '@angular/core';
import * as fromApp from '../../../reducers/app';
import * as AuthActions from '../../../auth/actions/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-menu',
  templateUrl: './menu.html'
})
export class UserMenuComponent {
  constructor(private store: Store<fromApp.State>) {}

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
