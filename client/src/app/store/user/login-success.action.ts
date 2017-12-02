import {Action} from '@ngrx/store';
import {type} from '../type';
import {UserState} from './user.store';

export class LoginSuccessAction implements Action {

  static type = type('user.LOGIN_SUCCESS_ACTION');
  type = LoginSuccessAction.type;

  static reduce(state: UserState, action: LoginSuccessAction) {
    return {...state, authorized: true, loading: false, admin: action.user.displayName === 'admin'};
  }

  constructor(public user) {
  }

}
