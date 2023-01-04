import { authFeature } from 'src/app/auth/data-access/store/auth.reducer';

export const ROOT_REDUCERS = {
  [authFeature.name]: authFeature.reducer,
};
