import { Injectable } from '@angular/core';
import {Product} from './product';
import {products} from './product.mock';

@Injectable()
export class ProductService {

  getProducts(): Promise<Product[]> {
    return Promise.resolve(products);
  }

}
