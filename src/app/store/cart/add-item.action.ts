import {Action} from '@ngrx/store';
import {type} from '../type';
import {Product} from '../../products/product';
import {CartState} from './cart.store';
import {getDiscountedPrice, isPromo} from '../../shared/product.helper';
import {merge} from 'lodash';

export class AddItemAction implements Action {

    static type = type('cart.ADD_ITEM');
    type = AddItemAction.type;

    private static getChangedItems(index: number, state: CartState, action: AddItemAction, product: Product) {
        let items;
        if (index === -1) {
            items = AddItemAction.appendNewItem(state, action, product);
        } else {
            items = AddItemAction.changeItem(state, index, action);
        }
        return items;
    }

    private static changeItem(state: CartState, index: number, action: AddItemAction) {
        return [
            ...state.items.slice(0, index),
            Object.assign({}, state.items[index], {
                amount: state.items[index].amount + action.amount
            }),
            ...state.items.slice(index + 1)];
    }

    private static appendNewItem(state: CartState, action: AddItemAction, product: Product) {
        return [...state.items, {product, amount: action.amount}];
    }

    constructor(public product: Product, public amount: number) {
    }

    static reduce(state: CartState, action: AddItemAction) {

        const product = merge({}, action.product);
        product.price.value = AddItemAction.computePrice(product);

        const index = state.items
            .map(item => item.product._id)
            .indexOf(product._id);

        const items = AddItemAction.getChangedItems(index, state, action, product);
        const newTotalValue = state.totalValue.value + (product.price.value * action.amount);
        const newTotalCount = state.totalCount + action.amount;

        return {
            ...state,
            items: items,
            totalCount: newTotalCount,
            totalValue: {
                ...state.totalValue,
                value: newTotalValue
            }
        };
    }

    private static computePrice(product) {
        const promo = isPromo(product);

        if (!promo) {
            return product.price.value;
        } else {
            return getDiscountedPrice(product);
        }
    }

}
