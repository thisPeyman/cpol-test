import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, map, skip, skipWhile, tap } from 'rxjs';
import { AuthFacade } from '../store/auth.facade';

export const AuthGuard = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  return firstValueFrom(
    authFacade.isAuthenticated$.pipe(
      skipWhile((v) => v === null),
      tap((isAuthenticated) => {
        if (!isAuthenticated) router.navigateByUrl('auth');
      })
    )
  );
};

export const NonAuthGuard = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  return firstValueFrom(
    authFacade.isAuthenticated$.pipe(
      skipWhile((v) => v === null),
      map((v) => !v),
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) router.navigateByUrl('/');
      })
    )
  );
};
