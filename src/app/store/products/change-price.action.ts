import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {type} from '../type';
import {Product} from '../../products/product';
import {products} from '../../products/product.mock';
import {LoadProductsSuccessAction} from './load-products-success.action';

export class ChangePriceAction implements Action {

  static type = type('products.CHANGE_PRICE');
  type = ChangePriceAction.type;

  static reduce(state: ProductsState, action: ChangePriceAction) {
    return {...state, query: { ...state.query, price: [action.minPrice, action.maxPrice] }};
  }

  constructor(public minPrice: number, public maxPrice: number) { }

}
