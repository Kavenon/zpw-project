import {Action} from '@ngrx/store';
import {type} from '../type';
import {UserState} from './user.store';

export class LogoutAction implements Action {

    static type = type('user.LOGOUT_ACTION');
    type = LogoutAction.type;

    static reduce(state: UserState, action: LogoutAction) {
        return {...state};
    }

    constructor() {
    }

}
