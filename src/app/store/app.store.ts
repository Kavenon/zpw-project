import {Product} from '../products/product';
import {ProductsReducer, ProductsState} from './products/products.store';
import {CategoriesReducer, CategoriesState} from './categories/categories.store';
import {CategoriesEffects} from './categories/categories.effects';
import {ProductsEffects} from './products/products.effects';

export interface AppState {
  products: ProductsState;
  categories: CategoriesState;
}

export const AppReducers = {
  products: ProductsReducer,
  categories: CategoriesReducer
};

export const AppEffects = [
  ProductsEffects,
  CategoriesEffects
];
