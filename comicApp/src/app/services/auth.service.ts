import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // set variable to store back-end API URL
  private _signupUrl = "http://localhost:8081/api/signup"
  private _loginUrl = "http://localhost:8081/api/login"

  // inject HttpClient
  constructor(private http: HttpClient, private _router: Router) { }

  // accepts a user object and returns the backend signup API response
  signupUser(user) {
    return this.http.post<any>(this._signupUrl, user)
  }

  // accepts a user object and returns the backend login API response
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  // method returns true if token is present in local storage
  loggedIn() {
    return !!localStorage.getItem('token')
    }

  // method to logout user
    logoutUser() {
        localStorage.removeItem('token')
        this._router.navigate(['/home-page'])
    }

  // method to fetch token value
  getToken() {
    return localStorage.getItem('token')
  }
}
