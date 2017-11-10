import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  categories: Promise<Category[]>;
  activeCategories: number[] = [];

  products: Promise<Product[]>;

  constructor(private categoryService: CategoryService,
              private productService: ProductService
  ) {

  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProducts();
  }

  onCategoryClick(category) {
    if (this.activeCategories.indexOf(category.id) > -1) {
      this.activeCategories = this.activeCategories.filter((id) => id !== category.id);
    } else {
      this.activeCategories = [...this.activeCategories, category.id];
    }
  }

  onDeselectAll(){
    this.activeCategories = [];
  }

}
