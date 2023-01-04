import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthActions } from './auth.actions';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.login),
      switchMap((v) => of(AuthActions.loginSuccess({ user: 'test' as any })))
    )
  );

  persistToken$ = createEffect(
    () =>
      this.authFacade.token$.pipe(
        tap((token) => LocalStorageService.set('token', token))
      ),
    { dispatch: false }
  );

  constructor(private actions: Actions, private authFacade: AuthFacade) {}
}
