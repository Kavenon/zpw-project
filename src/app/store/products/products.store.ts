import {Product} from '../../products/product';
import {createReducer} from '../build.reducer';
import {LoadProductsAction} from './load-products.action';
import {ProductFilterQuery} from '../../products/products-list/product-filter-query';
import {Pagination} from '../../products/products-list/pagination';
import {LoadProductsSuccessAction} from './load-products-success.action';
import {ChangePageAction} from './change-page.action';
import {FilterCallback} from 'tslint';
import {FilterCategoryAction} from './filter-category.action';
import {ChangeTermAction} from './change-term.action';

export interface ProductsState {
  items: Product[];
  total: 0;
  query: ProductFilterQuery;
  pagination: Pagination;
}

const initState: ProductsState = {
  items: [],
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

export const ProductsReducer = createReducer(initState,
  ChangePageAction,
  ChangeTermAction,
  FilterCategoryAction,
  LoadProductsAction,
  LoadProductsSuccessAction,
);
