import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs/operators';

import * as AuthActions from '../actions/auth';
import * as fromAuth from '../reducers/auth';
import { LoginRedirect } from '../actions/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromAuth.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      take(1),
      map((loggedIn) => {
        if (!loggedIn) {
          this.store.dispatch(new AuthActions.LoginRedirect());
        }
        return loggedIn;
      })
    );
  }
}
