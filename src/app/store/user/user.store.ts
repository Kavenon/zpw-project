import {createReducer} from '../build.reducer';
import {LoginAction} from './login.action';
import {LoginSuccessAction} from './login-success.action';
import {LoginFailAction} from './login-fail.action';

export interface UserState {
  authorized: boolean;
  loading: boolean;
  error: string;
}

const initState: UserState = {
  authorized: false,
  loading: false,
  error: null,
};
export const UserReducer = createReducer(initState,
  LoginAction,
  LoginSuccessAction,
  LoginFailAction,
);
