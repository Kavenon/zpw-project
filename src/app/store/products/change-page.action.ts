import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {type} from '../type';
import {Product} from '../../products/product';
import {products} from '../../products/product.mock';
import {LoadProductsSuccessAction} from './load-products-success.action';

export class ChangePageAction implements Action {

  static type = type('products.CHANGE_PAGE');
  type = ChangePageAction.type;

  static reduce(state: ProductsState, action: ChangePageAction) {
    return {...state, pagination: {...state.pagination, page: action.page}};
  }

  constructor(public page: number) { }

}
