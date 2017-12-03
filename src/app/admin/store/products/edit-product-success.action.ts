import {Action} from '@ngrx/store';
import {AdminProductsState} from './products.store';
import {type} from '../../../store/type';
import {Product} from '../../../products/product';

export class EditProductSuccessAction implements Action {

    static type = type('products.admin.EDIT_PRODUCT_SUCCESS');
    type = EditProductSuccessAction.type;

    static reduce(state: AdminProductsState, action: EditProductSuccessAction) {
        return {...state, editProduct: action.product};
    }

    constructor(public product: Product) {
    }

}
