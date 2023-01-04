import { authFeature } from './auth.reducer';

const { selectAuthState, selectToken } = authFeature;

export const AuthQuery = { selectAuthState, selectToken };
