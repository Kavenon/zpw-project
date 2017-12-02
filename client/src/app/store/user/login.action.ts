import {Action} from '@ngrx/store';
import {type} from '../type';
import {UserState} from './user.store';

export class LoginAction implements Action {

  static type = type('user.LOGIN_ACTION');
  type = LoginAction.type;

  static reduce(state: UserState, action: LoginAction) {
    return {...state, loading: true};
  }

  constructor() {
  }

}
