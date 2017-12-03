import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Price} from '../../products/price';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../store/app.store';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-cart-widget',
    templateUrl: './cart-widget.component.html',
    styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('widget') widget: ElementRef;

    previousTotalCount: number = -1;
    totalCount: Observable<number>;
    totalValue: Observable<Price>;
    subscription: Subscription;

    constructor(private store: Store<AppState>, private renderer2: Renderer2) {
    }

    ngOnInit() {
        this.totalCount = this.store.select(state => state.cart.totalCount);
        this.totalValue = this.store.select(state => state.cart.totalValue);

    }

    ngAfterViewInit(): void {
        this.subscription = this.totalCount.subscribe(count => {
            if (this.previousTotalCount === -1) {
                this.previousTotalCount = count;
                return;
            }
            this.runShake();
        });

    }

    private runShake() {
        this.renderer2.addClass(this.widget.nativeElement, 'shake-constant');
        this.renderer2.addClass(this.widget.nativeElement, 'shake');
        setTimeout(_2 => {
            this.renderer2.removeClass(this.widget.nativeElement, 'shake-constant');
            this.renderer2.removeClass(this.widget.nativeElement, 'shake');
        }, 500);
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
