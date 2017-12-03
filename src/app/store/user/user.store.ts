import {createReducer} from '../build.reducer';
import {LoginAction} from './login.action';
import {LoginSuccessAction} from './login-success.action';
import {LoginFailAction} from './login-fail.action';
import {LogoutAction} from './logout.action';
import {LogoutSuccessAction} from './logout-success.action';

export interface UserState {
    authorized: boolean;
    loading: boolean;
    error: string;
    admin: boolean;
}

const initState: UserState = {
    authorized: false,
    admin: false,
    loading: false,
    error: null,
};

const reducer = createReducer(initState,
    LoginAction,
    LoginSuccessAction,
    LoginFailAction,
    LogoutAction,
    LogoutSuccessAction,
);

export function UserReducer(state, action) {
    return reducer(state, action);
}
