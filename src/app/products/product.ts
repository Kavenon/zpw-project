import {Price} from './price';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: Price;
  categoryId: number;
}
