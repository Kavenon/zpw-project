import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Order} from '../../checkout/order';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/from';
import {API} from '../../config';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Order[]> {
    return this.http.get(API + '/orders.json').map((data) => {
      return Object.keys(data).map(key => data[key]);
    });
  }

  saveOrder(order: Order): Observable<Object> {
    return this.http.post(API + '/orders.json', order);
  }
}
