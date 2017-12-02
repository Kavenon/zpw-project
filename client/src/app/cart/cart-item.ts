import {Product} from '../products/product';

export interface CartItem {
  amount: number;
  product: Product;
}
