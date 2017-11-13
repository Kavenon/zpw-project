import { Injectable } from '@angular/core';
import {Category} from './category';

import { categories } from './category.mock';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  getCategories(): Observable<Category[]> {
    return Observable.of(categories);
  }

}
