import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import { AuthActions } from './auth.actions';

interface State {
  token: string;
  user: User | null;
  isLoading: boolean;
}

const initialState: State = {
  token: '',
  user: null,
  isLoading: false,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { user, token }) => ({
      ...state,
      user,
      token,
    })),
    on(AuthActions.loginFail, (state) => ({ ...state, token: '', user: null })),
    on(AuthActions.setIsLoading, (state, { isLoading }) => ({
      ...state,
      isLoading,
    }))
  ),
});
