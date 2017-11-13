import {ProductsReducer, ProductsState} from './products/products.store';
import {CategoriesReducer, CategoriesState} from './categories/categories.store';
import {CategoriesEffects} from './categories/categories.effects';
import {ProductsEffects} from './products/products.effects';
import {CartReducer, CartState} from './cart/cart.store';
import {UserReducer, UserState} from './user/user.store';

export interface AppState {
  products: ProductsState;
  categories: CategoriesState;
  cart: CartState;
  user: UserState;
}

export const AppReducers = {
  products: ProductsReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
  user: UserReducer,
};

export const AppEffects = [
  ProductsEffects,
  CategoriesEffects,
];
