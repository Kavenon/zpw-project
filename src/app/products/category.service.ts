import {Injectable} from '@angular/core';
import {Category} from './category';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {API} from '../config';

@Injectable()
export class CategoryService {


    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {
        return this.http
            .get(API + '/category');
    }

}
