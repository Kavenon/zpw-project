import {Product} from '../../products/product';
import {LoadProductsAction} from './load-products.action';
import {LoadProductsSuccessAction} from './load-products-success.action';
import {ChangePageAction} from './change-page.action';
import {FilterCategoryAction} from './filter-category.action';
import {ChangeTermAction} from './change-term.action';
import {ChangePriceAction} from './change-price.action';
import {createReducer} from '../build.reducer';
import {ProductFilterQuery} from '../../products/product-list/product-filter-query';
import {Pagination} from '../../products/product-list/pagination';
import {NotifyProductAfterOrderAction} from './notifications/notify-product-change-after-order.action';
import {NotifyProductChangedAction} from './notifications/notify-product-changed.action';
import {NotifyProductCreatedAction} from './notifications/notify-product-created.action';
import {NotifyProductDeletedAction} from './notifications/notify-product-deleted.action';
import {NotifyProductPromotedAction} from './notifications/notify-product-promoted.action';

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
    categories: [],
    price: [0, 500],
  },
  pagination: {
    page: 1,
    perPage: 1,
    total: 0
  }
};
const reducer = createReducer(initState,
  ChangePriceAction,
  ChangePageAction,
  ChangeTermAction,
  FilterCategoryAction,
  LoadProductsAction,
  LoadProductsSuccessAction,
  NotifyProductAfterOrderAction,
  NotifyProductChangedAction,
  NotifyProductCreatedAction,
  NotifyProductDeletedAction,
  NotifyProductPromotedAction
);

export function ProductsReducer(state, action) {
  return reducer(state, action);
}
