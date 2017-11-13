import {Action} from '@ngrx/store';
import {type} from '../type';
import {CategoriesState} from './categories.store';

export class LoadCategoriesAction implements Action {

  static type = type('categories.LOAD_CATEGORIES');
  type = LoadCategoriesAction.type;

  static reduce(state: CategoriesState, action: LoadCategoriesAction) {
    return state;
  }

  constructor() { }

}
