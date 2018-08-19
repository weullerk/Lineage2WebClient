import { User } from '../models/auth';
import { AuthActions, AuthActionTypes } from '../actions/auth';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    }

    case AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getAuth = createFeatureSelector<State>('auth');
export const getLoggedIn = createSelector(
  getAuth,
  (state: State) => state.loggedIn
);
export const getUser = createSelector(
  getAuth,
  (state: State) => state.user
);

