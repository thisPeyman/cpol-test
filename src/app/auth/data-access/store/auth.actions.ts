import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/user';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{ username: string; password: string }>(),
    'Login Success': props<{ user: User; token: string }>(),
    'Login Fail': emptyProps(),
    'Set Is Loading': (isLoading: boolean) => ({ isLoading }),
  },
});
