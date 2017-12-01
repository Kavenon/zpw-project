import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../category';
import {Product} from '../product';
import {Observable} from 'rxjs/Observable';
import {Pagination} from './pagination';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {LoadProductsAction} from '../../store/products/load-products.action';
import {LoadCategoriesAction} from '../../store/categories/load-categories.action';
import {ChangePageAction} from '../../store/products/change-page.action';
import {FilterCategoryAction} from '../../store/products/filter-category.action';
import {ChangeTermAction} from '../../store/products/change-term.action';
import {AddItemAction} from '../../store/cart/add-item.action';
import {ChangePriceAction} from '../../store/products/change-price.action';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subscription} from 'rxjs/Subscription';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {

  categories: Observable<Category[]>;
  products: Observable<Product[]>;

  activeCategories: Observable<number[]>;
  pagination: Observable<Pagination>;
  priceRange: Observable<number[]>;

  rangeChanged: Subject<number[]> = new Subject<number[]>();
  rangeChangedSubscription: Subscription;

  constructor(private store: Store<AppState>, private modalService: NgbModal, private toastr: ToastrService) {
    this.rangeChangedSubscription =
      this.rangeChanged
        .debounceTime(200)
        .distinctUntilChanged()
        .subscribe(range => {
          this.store.dispatch(new ChangePriceAction(range[0], range[1]));
        });
  }

  ngOnInit() {

    this.store.dispatch(new LoadCategoriesAction());
    this.store.dispatch(new LoadProductsAction());

    this.products = this.store.select(state => state.products.items);
    this.categories = this.store.select(state => state.categories.items);
    this.pagination = this.store.select(state => state.products.pagination);
    this.activeCategories = this.store.select(state => state.products.query.categories);
    this.priceRange = this.store.select(state => state.products.query.price);

  }

  ngOnDestroy(){
    this.rangeChangedSubscription.unsubscribe();
  }

  onCategoryClick(category) {
    this.store.dispatch(new FilterCategoryAction(category._id));
  }

  onDeselectAll() {
    this.store.dispatch(new FilterCategoryAction(null));
  }

  onPageChange(selectedPage: number) {
    this.store.dispatch(new ChangePageAction(selectedPage));
  }

  onTermChanged(term: string) {
    this.store.dispatch(new ChangeTermAction(term));
  }

  addToCart(product: Product) {
    this.store.dispatch(new AddItemAction(product, 1));
  }

  showDetails(product: Product, detailsModal) {
    const modalRef = this.modalService.open(ProductDetailsComponent);
    modalRef.componentInstance.product = product;
  }

  onPriceRangeChanged(range) {
    this.rangeChanged.next(range);
  }
}
