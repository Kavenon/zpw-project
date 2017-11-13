import {Product} from '../../products/product';
import {products} from '../../products/product.mock';
import {buildReducer} from '../build.reducer';
import {LoadProductsAction} from './load-products.action';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {LoadProductsSuccessAction} from './load-products-success.action';

export interface ProductsState {
  products: Product[];
  total: 0;
  query: ProductFilterQuery;
  pagination: Pagination;
}

const initState: ProductsState = {
  products: [],
  total: 0,
  query: {
    term: null,
    categories: []
  },
  pagination: {
    page: 1,
    perPage: 1,
    total: 0
  }
};

export const ProductsReducer = buildReducer(initState,
  LoadProductsAction,
  LoadProductsSuccessAction,
);
