import {createReducer} from '../build.reducer';
import {Category} from '../../products/category';
import {LoadCategoriesAction} from './load-categories.action';
import {LoadCategoriesSuccessAction} from './load-categories-success.action';

export interface CategoriesState {
  items: Category[];
}

const initState: CategoriesState = {
  items: [],
};

const reducer = createReducer(initState,
  LoadCategoriesAction,
  LoadCategoriesSuccessAction,
);

export function CategoriesReducer(state, action) {
  return reducer(state, action);
}
