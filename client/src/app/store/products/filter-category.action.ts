import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {type} from '../type';

export class FilterCategoryAction implements Action {

  static type = type('products.FILTER_CATEGORY');
  type = FilterCategoryAction.type;

  static reduce(state: ProductsState, action: FilterCategoryAction) {
    const categories = FilterCategoryAction.getChangedItems(action, state);
    return {...state, query: {...state.query, categories}};
  }

  private static getChangedItems(action: FilterCategoryAction, state: ProductsState) {
    let categories;
    if (action.category === null) {
      categories = [];
    } else {
      categories = state.query.categories.slice(0).toggle(action.category);
    }
    return categories;
  }

  constructor(public category: number) { }

}


