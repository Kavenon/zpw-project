import {Component, Input} from '@angular/core';
import {Product} from '../../product';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {

  @Input() product: Product;

  constructor(public activeModal: NgbActiveModal) {
  }

}
