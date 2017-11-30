import {Injectable} from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Pagination} from './product-list/pagination';
import {ProductFilterQuery} from './product-list/product-filter-query';
import {ProductResponse} from './product-response';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API} from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Promo} from './promo';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get(API + '/product/all');
  }

  getProductToEdit(productId?: string): Observable<Product> {
    if (!productId) {
      return Observable.of({
        _id: null,
        name: '',
        description: '',
        price: {
          value: null,
          currency: 'USD',
        },
        categoryId: null,
        photos: [],
        promo: {
          discount: 0,
          until: 0
        }
      });
    } else {
      return this.http.get(API + '/product/' + productId);
    }
  }

  deleteProduct(productId: string): Observable<Object> {
    return this.http.delete(API + '/product/' + productId);
  }

  saveProduct(product: Product): Observable<Product> {
    const newProduct = Object.assign({}, product);
    if (!newProduct._id) {
      return this.http.post(API + '/product', product);
    } else {
      return this.http.put(API + '/product/' + product._id, product);
    }
  }

  getProducts(query: ProductFilterQuery, pagination: Pagination): Observable<ProductResponse> {

    let httpParams = new HttpParams();
    httpParams = httpParams.set('filter', (JSON.stringify(query)));
    httpParams = httpParams.set('pagination', (JSON.stringify(pagination)));
    return this.http.get(API + '/product', {params: httpParams});

  }

  createPromo(promo: Promo) {
    return this.http.post(API + '/product/promo', promo);
  }

}
