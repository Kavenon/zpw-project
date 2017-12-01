import {ProductsState} from '../products.store';
import {Product} from '../../../products/product';
import {merge} from 'lodash';

export function reduceProduct(state: ProductsState, product: Product): ProductsState {

  const index = state.items.map(item => item._id).indexOf(product._id);
  if (index === -1) {
    return state;
  }
  return editProduct(state, index, product);

}

function editProduct(state: ProductsState, index: number, product: Product): ProductsState {
  return {
    ...state,
    items: [
      ...state.items.slice(0, index),
      merge({}, state.items[index], product),
      ...state.items.slice(index + 1),
    ]
  };
}
