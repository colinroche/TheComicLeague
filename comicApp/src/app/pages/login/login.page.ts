import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUserData = {}

  // inject the AuthService
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  // call service passing the user data
  loginUser() {
    this._auth.loginUser(this.loginUserData)
    // subscribe to the observable that is returned
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
