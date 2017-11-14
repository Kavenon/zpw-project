import {Product} from '../../../products/product';
import {createReducer} from '../../../store/build.reducer';
import {LoadProductsAction} from './load-products.action';
import {LoadProductsSuccessAction} from './load-products-success.action';
import {EditProductAction} from './edit-product.action';
import {DeleteProductAction} from './delete-product.action';
import {EditProductSuccessAction} from './edit-product-success.action';

export interface AdminProductsState {
  items: Product[];
  editProduct: Product;
}

const initState: AdminProductsState = {
  items: [],
  editProduct: null,
};
const reducer = createReducer(initState,
  LoadProductsAction,
  LoadProductsSuccessAction,
  EditProductAction,
  EditProductSuccessAction,
  DeleteProductAction,
);

export function AdminProductsReducer(state, action) {
  return reducer(state, action);
}
