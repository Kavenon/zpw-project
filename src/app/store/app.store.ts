import {Product} from '../products/product';
import {ProductsReducer, ProductsState} from './products/products.store';

export interface AppState {
  products: ProductsState;
}

export const AppReducers = {
  products: ProductsReducer
};


