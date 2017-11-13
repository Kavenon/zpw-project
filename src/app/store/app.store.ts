import {Product} from '../products/product';
import {ProductsReducer, ProductsState} from './products/products.store';
import {CategoriesReducer, CategoriesState} from './categories/categories.store';
import {CategoriesEffects} from './categories/categories.effects';
import {ProductsEffects} from './products/products.effects';
import {CartReducer, CartStore} from './cart/cart.store';

export interface AppState {
  products: ProductsState;
  categories: CategoriesState;
  cart: CartStore;
}

export const AppReducers = {
  products: ProductsReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
};

export const AppEffects = [
  ProductsEffects,
  CategoriesEffects,
];
