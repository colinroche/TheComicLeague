import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // set variable to store back-end API URL
  private _signupUrl = "http://localhost:8081/api/signup"
  private _loginUrl = "http://localhost:8081/api/login"

  // inject HttpClient
  constructor(private http: HttpClient) { }

  // accepts a user object and returns the backend API response
  signupUser(user) {
    return this.http.post<any>(this._signupUrl, user)
    }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
}
