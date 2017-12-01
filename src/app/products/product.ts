import {Price} from './price';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: Price;
  categoryId: number;
  photos: string[];
  promo: {
    discount: number;
    until: number;
  };
  amount: number;
}
