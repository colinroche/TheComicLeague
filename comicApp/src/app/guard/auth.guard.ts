import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService) { }

  canActivate(): boolean {
    // if token is present, user is logged in and can navigate to their personal page
    if (this._authService.loggedIn()) {
       return true
    } else {
       // if token is absent user is navigated to the login page
       this._router.navigate(['/login'])
       return false
    }
  }
}
