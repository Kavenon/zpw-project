import {Action} from '@ngrx/store';
import {type} from '../type';
import {UserState} from './user.store';

export class LogoutSuccessAction implements Action {

    static type = type('user.LOGOUT_SUCCESS_ACTION');
    type = LogoutSuccessAction.type;

    static reduce(state: UserState, action: LogoutSuccessAction) {
        return {...state, authorized: false};
    }

    constructor() {
    }

}
