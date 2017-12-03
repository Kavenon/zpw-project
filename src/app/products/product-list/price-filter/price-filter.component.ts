import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-price-filter',
    templateUrl: './price-filter.component.html',
})
export class PriceFilterComponent {

    @Input() priceRange;
    @Output() onChange = new EventEmitter<any>();

    priceRangeChanged($event) {
        this.onChange.emit($event);
    }

}
