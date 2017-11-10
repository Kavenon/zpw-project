import {Price} from './price';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: Price;
  categoryId: number;
}
