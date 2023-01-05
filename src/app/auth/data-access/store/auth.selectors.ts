import { authFeature } from './auth.reducer';

const {
  selectAuthState,
  selectToken,
  selectIsLoading,
  selectUser,
  selectIsAuthenticated,
} = authFeature;

export const AuthQuery = {
  selectAuthState,
  selectToken,
  selectIsLoading,
  selectUser,
  selectIsAuthenticated,
};
