import { createFeature, createReducer, on } from '@ngrx/store';
import { LocalStorageService } from 'src/app/shared/data-access/services/local-storage.service';
import { User } from '../models/user';
import { AuthActions } from './auth.actions';

interface State {
  token: string;
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean | null;
}

const initialState: State = {
  token: LocalStorageService.get('token') || '',
  user: null,
  isLoading: false,
  isAuthenticated: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(AuthActions.authSuccess, (state, { user, token }) => ({
      ...state,
      user,
      token,
      isAuthenticated: true,
    })),
    on(AuthActions.loginFail, (state) => ({
      ...state,
      token: '',
      user: null,
      isAuthenticated: false,
    })),
    on(AuthActions.setIsLoading, (state, { isLoading }) => ({
      ...state,
      isLoading,
    }))
  ),
});
