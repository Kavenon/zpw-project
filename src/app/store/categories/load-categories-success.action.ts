import {Action} from '@ngrx/store';
import {type} from '../type';
import {Category} from '../../products/category';
import {CategoriesState} from './categories.store';

export class LoadCategoriesSuccessAction implements Action {

    static type = type('products.LOAD_CATEGORIES_SUCCESS');
    type = LoadCategoriesSuccessAction.type;

    static reduce(state: CategoriesState, action: LoadCategoriesSuccessAction) {
        return {...state, items: action.categories};
    }

    constructor(public categories: Category[]) {
    }

}
