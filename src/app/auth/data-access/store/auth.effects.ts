import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/data-access/services/local-storage.service';
import { AuthApiService } from '../services/auth-api.service';
import { AuthActions } from './auth.actions';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(() => this.authFacade.dispatch(AuthActions.setIsLoading(true))),
      switchMap(({ username, password }) =>
        this.authApiService.login({ username, password }).pipe(
          map(({ user, token }) => {
            this.authFacade.dispatch(AuthActions.setIsLoading(false));
            this.router.navigateByUrl('/');
            return AuthActions.authSuccess({ user, token });
          }),
          catchError((e) => {
            this.authFacade.dispatch(AuthActions.setIsLoading(false));
            return of(AuthActions.loginFail());
          })
        )
      )
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getUser),
      concatLatestFrom(() => this.authFacade.token$),
      switchMap(([, token]) =>
        this.authApiService
          .verifyToken(token)
          .pipe(
            map(({ user }) =>
              user
                ? AuthActions.authSuccess({ token, user })
                : AuthActions.loginFail()
            )
          )
      )
    )
  );

  persistToken$ = createEffect(
    () =>
      this.authFacade.token$.pipe(
        tap((token) => LocalStorageService.set('token', token))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authFacade: AuthFacade,
    private authApiService: AuthApiService,
    private router: Router
  ) {}
}
