import {Price} from '../products/price';

export interface Order {
  id: number;
  name: string;
  surname: string;
  totalValue: Price;
  items: OrderItem[];
}

export interface OrderItem {
  name: string;
  price: Price;
  amount: number;
}
