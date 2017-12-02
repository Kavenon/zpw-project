import {Injectable} from '@angular/core';

import * as sioc from 'socket.io-client';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {NotifyProductCreatedAction} from '../store/products/notifications/notify-product-created.action';
import {NotifyProductChangedAction} from '../store/products/notifications/notify-product-changed.action';
import {NotifyProductPromotedAction} from '../store/products/notifications/notify-product-promoted.action';
import {NotifyProductDeletedAction} from '../store/products/notifications/notify-product-deleted.action';
import {NotifyProductAfterOrderAction} from '../store/products/notifications/notify-product-change-after-order.action';

@Injectable()
export class SocketService {

  constructor(private store: Store<AppState>) {

  }

  init() {
    console.log('SocketService init');
    const socket = sioc.connect('/ws', {path: '/ws'});
    socket.on('messages', (data) => {

      switch (data.type) {
        case 'product.created':
          this.store.dispatch(new NotifyProductCreatedAction(data.product));
          break;
        case 'product.changed':
          this.store.dispatch(new NotifyProductChangedAction(data.product));
          break;
        case 'product.promoted':
          this.store.dispatch(new NotifyProductPromotedAction(data.product));
          break;
        case 'product.deleted':
          this.store.dispatch(new NotifyProductDeletedAction(data.product));
          break;
        case 'order.created':
          this.store.dispatch(new NotifyProductAfterOrderAction(data.product));
          break;
      }
      console.log('socket', data);
    });
  }

}
