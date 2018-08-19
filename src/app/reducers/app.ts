import * as fromAuth from '../auth/reducers/auth';
import * as fromLogin from '../auth/reducers/login';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  auth: fromAuth.State;
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  login: fromLogin.reducer
};
