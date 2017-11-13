import {Action} from '@ngrx/store';

export function createReducer<T>(initial: T, ...actionClasses: { type: string, reduce: (state: T, action: Action) => T }[]) {
  const handlers: {
    [key: string]: (state: T, action: Action) => T
  } = {};
  actionClasses.forEach((ac) => {
    handlers[ac.type] = ac.reduce;
  });
  return (state: T = initial, action: Action) => handlers[action.type] ? handlers[action.type](state, action) : state;
}
