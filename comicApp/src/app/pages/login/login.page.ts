import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUserData = {}

  // inject the AuthService
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  // call service passing the user data
  loginUser() {
    this._auth.loginUser(this.loginUserData)
    // subscribe to the observable that is returned
      .subscribe(
        res => {
            console.log(res)
            // store user token in local storage
            localStorage.setItem('token', res.token)
            // navigates the user to the Your Personal page
            this._router.navigate(['/personal'])
        },
        err => console.log(err)
      )
  }

}
