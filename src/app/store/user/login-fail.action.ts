import {Action} from '@ngrx/store';
import {type} from '../type';
import {UserState} from './user.store';

export class LoginFailAction implements Action {

    static type = type('user.LOGIN_FAIL_ACTION');
    type = LoginFailAction.type;

    static reduce(state: UserState, action: LoginFailAction) {
      return {...state, error: action.error || 'Podane dane są nieprawidłowe', loading: false};
    };

  constructor(public error?: string) {
    }

}
