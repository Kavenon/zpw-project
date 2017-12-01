import {Price} from '../products/price';

export type OrderStatus = 'PENDING' | 'DONE';

export interface Order {
  _id: number;
  name: string;
  street: string;
  totalValue: Price;
  items: OrderItem[];
  status: OrderStatus;
}

export interface OrderItem {
  _id: string;
  name: string;
  price: Price;
  amount: number;
}
