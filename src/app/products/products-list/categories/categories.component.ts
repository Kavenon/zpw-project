import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Input() categories: Category[];
  @Input() activeCategories: number[];
  @Output() onCategoryClick = new EventEmitter<Category>();
  @Output() onDeselectAll = new EventEmitter<void>();

  categoryClicked(category: Category) {
    this.onCategoryClick.emit(category);
  }

  onClickDeselect() {
    this.onDeselectAll.emit();
  }
}
