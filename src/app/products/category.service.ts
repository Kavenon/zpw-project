import { Injectable } from '@angular/core';
import {Category} from './category';

import { categories } from './category.mock';

@Injectable()
export class CategoryService {

  getCategories(): Promise<Category[]> {
    return Promise.resolve(categories);
  }

}
