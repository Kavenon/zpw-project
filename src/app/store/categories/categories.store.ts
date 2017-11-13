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

export const CategoriesReducer = createReducer(initState,
  LoadCategoriesAction,
  LoadCategoriesSuccessAction,
);
