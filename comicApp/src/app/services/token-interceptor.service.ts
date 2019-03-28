import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  // using Injector to prevent possible cyclic dependency error
  constructor(private injector: Injector) { }

  // http request interception, add token 
    intercept(req, next) {
    // get instance of AuthService
    let authService = this.injector.get(AuthService)
    // clone request
    let tokenReq = req.clone({
      // add authorization info to the header
        setHeaders: {
        // call get token method, directly embed the value of the token as part of the string
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenReq)
  }
}
