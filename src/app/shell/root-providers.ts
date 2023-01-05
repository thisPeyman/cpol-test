import { isDevMode, EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './config/root-reducers';
import { SHELL_ROUTES } from './shell.routes';
import { ROOT_EFFECTS } from './config/root-effects';
import { registerLocaleData } from '@angular/common';
import fa from '@angular/common/locales/fa';
registerLocaleData(fa);
import { NZ_I18N, fa_IR } from 'ng-zorro-antd/i18n';
import { provideAnimations } from '@angular/platform-browser/animations';

export const ROOT_PROVIDERS: (EnvironmentProviders | Provider)[] = [
  provideRouter(SHELL_ROUTES),
  provideHttpClient(),
  provideAnimations(),
  provideStore(ROOT_REDUCERS),
  provideEffects(ROOT_EFFECTS),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75,
  }),
  { provide: NZ_I18N, useValue: fa_IR },
];
