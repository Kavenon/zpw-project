import {Action} from '@ngrx/store';
import {ProductsState} from './products.store';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {type} from '../type';
import {Product} from '../../products/product';
import {products} from '../../products/product.mock';

export class LoadProductsSuccessAction implements Action {

  static type = type('products.LOAD_PRODUCTS_SUCCESS');
  type = LoadProductsSuccessAction.type;

  static reduce(state: ProductsState, action: LoadProductsSuccessAction) {
    return {...state, products: action.products};
  }

  constructor(public products: Product[]) { }

}
