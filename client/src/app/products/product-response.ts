import {Product} from './product';

export interface ProductResponse {
  items: Product[];
  total: number;
}
