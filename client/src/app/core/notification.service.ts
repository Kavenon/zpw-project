import {Injectable} from '@angular/core';

import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private router: Router, private toastr: ToastrService) {

  }

  notifySuccess(title, msg) {
    if (!this.isAdminView()) {
      this.toastr.success(msg, title);
    }
  }

  notifyWarning(title: string, msg: string) {
    if (!this.isAdminView()) {
      this.toastr.warning(msg, title);
    }
  }

  private isAdminView() {
    return this.router.url.indexOf('admin') > -1;
  }

}
