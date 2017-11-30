import {Injectable} from '@angular/core';

import * as sioc from 'socket.io-client';
import {AppState} from '../store/app.store';
import {Store} from '@ngrx/store';
import {API} from '../config';

@Injectable()
export class SocketService {

  constructor(private store: Store<AppState>) {

  }

  init() {
    console.log('SocketService init');
    const socket = sioc.connect(API);
    socket.on('messages', function (data) {
      console.log('socket', data);
    });
  }

}
