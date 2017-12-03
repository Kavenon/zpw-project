import {ProductsReducer, ProductsState} from './products/products.store';
import {CategoriesReducer, CategoriesState} from './categories/categories.store';
import {CategoriesEffects} from './categories/categories.effects';
import {ProductsEffects} from './products/products.effects';
import {CartReducer, CartState} from './cart/cart.store';
import {UserReducer, UserState} from './user/user.store';
import {UserEffects} from './user/user.effects';
import {OrdersEffects} from '../admin/store/orders/orders.effects';
import {OrdersReducer, OrdersState} from '../admin/store/orders/orders.store';
import {AdminProductsEffects} from '../admin/store/products/products.effects';
import {AdminProductsReducer, AdminProductsState} from '../admin/store/products/products.store';
import {CartEffects} from './cart/cart-effects';

export interface AppState {
    products: ProductsState;
    categories: CategoriesState;
    cart: CartState;
    user: UserState;
    orders: OrdersState;
    adminProducts: AdminProductsState;
}

export const AppReducers = {
    products: ProductsReducer,
    categories: CategoriesReducer,
    cart: CartReducer,
    user: UserReducer,
    orders: OrdersReducer,
    adminProducts: AdminProductsReducer,
};

export const AppEffects = [
    ProductsEffects,
    CategoriesEffects,
    UserEffects,
    OrdersEffects,
    AdminProductsEffects,
    CartEffects,
];
