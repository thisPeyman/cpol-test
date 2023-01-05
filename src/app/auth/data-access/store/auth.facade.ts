import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AuthQuery } from './auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  state$ = this.store.select(AuthQuery.selectAuthState);
  token$ = this.store.select(AuthQuery.selectToken);
  isLoading$ = this.store.select(AuthQuery.selectIsLoading);
  user$ = this.store.select(AuthQuery.selectUser);
  isAuthenticated$ = this.store.select(AuthQuery.selectIsAuthenticated);

  constructor(private store: Store) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
