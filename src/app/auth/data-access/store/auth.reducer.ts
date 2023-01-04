import { createFeature, createReducer } from '@ngrx/store';
import { User } from '../models/user';

interface State {
  token: string;
  user: User | null;
}

const initialState: State = {
  token: '',
  user: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(initialState),
});
