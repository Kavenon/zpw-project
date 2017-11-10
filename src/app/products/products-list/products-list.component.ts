import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ProductFilterQuery} from './product-filter-query';
import {Observable, Subscribable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Pagination} from './pagination';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  categories: Promise<Category[]>;
  activeCategories = new BehaviorSubject<number[]>([]);

  products: Observable<Product[]>;
  filterQuery: BehaviorSubject<ProductFilterQuery>;

  filterQuerySub: Subscription;

  pagination: Pagination;

  constructor(private categoryService: CategoryService,
              private productService: ProductService
  ) {

  }


  ngOnInit() {

    const initFilter = {
      term: null,
      categories: [],
    };
    this.filterQuery = new BehaviorSubject<ProductFilterQuery>(initFilter);
    this.pagination = {
      page: 1,
      perPage: 1,
      total: 0
    };

    this.categories = this.categoryService.getCategories();

    this.filterQuerySub = this.filterQuery.subscribe(filter => {
      // Todo: move to @ng/rx
      this.pagination.page = 1;
      this.products = this.productService.getProducts(filter, this.pagination);
      this.productService.getTotal(filter).then(total => this.pagination.total = total);
      this.activeCategories.next(filter.categories);
    });

  }

  ngOnDestroy() {
    this.filterQuerySub.unsubscribe();
  }

  onCategoryClick(category) {

    const activeCategoriesVal = this.activeCategories.getValue() || [];
    let categories;
    if (activeCategoriesVal.indexOf(category.id) > -1) {
      categories = activeCategoriesVal.filter((id) => id !== category.id);
    } else {
      categories = [...activeCategoriesVal, category.id];
    }

    this.filterQuery.next({...this.filterQuery.getValue(), categories: categories});

  }

  onDeselectAll() {
    this.activeCategories.next([]);
  }

  onPageChange(selectedPage: number) {
    this.pagination.page = selectedPage;
    this.products = this.productService.getProducts(this.filterQuery.getValue(), this.pagination);
  }

  onTermChanged(term: string) {
    this.filterQuery.next({...this.filterQuery.getValue(), term: term});
  }
}
