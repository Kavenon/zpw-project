import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth/auth.service';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return Observable
            .fromPromise(this.authService.getToken())
            .switchMap(token => {
                if (token) {
                    const authReq = req.clone({
                        params: req.params.set(
                            'auth',
                            token
                        )
                    });
                    return next.handle(authReq);
                } else {
                    return next.handle(req.clone());
                }
            });
    }
}
