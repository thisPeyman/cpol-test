import { isDevMode, EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './config/root-reducers';
import { SHELL_ROUTES } from './shell.routes';

export const ROOT_PROVIDERS: (EnvironmentProviders | Provider)[] = [
  provideRouter(SHELL_ROUTES),
  provideHttpClient(),
  provideStore(ROOT_REDUCERS),
  provideEffects(),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75,
  }),
];
