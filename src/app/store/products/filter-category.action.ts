import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {type} from '../type';
import {Product} from '../../products/product';
import {products} from '../../products/product.mock';
import {LoadProductsSuccessAction} from './load-products-success.action';

export class FilterCategoryAction implements Action {

  static type = type('products.FILTER_CATEGORY');
  type = FilterCategoryAction.type;

  static reduce(state: ProductsState, action: FilterCategoryAction) {
    let categories;
    if(action.category === null){
      categories = [];
    } else {
      categories = state.query.categories.slice(0).toggle(action.category);
    }

    return {...state, query: { ...state.query, categories}};
  }

  constructor(public category: number) { }

}


