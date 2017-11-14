import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Order} from '../../checkout/order';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/from';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Order[]> {

    const order: Order = {
      id: 1,
      name: 'Test',
      surname: 'Test2',
      totalValue: {
        value: 10,
        currency: 'USD',
      },
      items: [
        {
          name: 'produkt',
          price: {
            value: 10,
            currency: 'USD',
          },
          amount: 1
        }
      ]
    };
    return Observable.of([order]);

  }
}
