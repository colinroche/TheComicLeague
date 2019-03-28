import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupUserData = {}

  // inject the AuthService
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  // call service passing the user data
  signupUser() {
    this._auth.signupUser(this.signupUserData)
    // subscribe to the observable that is returned
      .subscribe(
        res => {
          console.log(res)
          // store user token in local storage
          localStorage.setItem('token', res.token)
          // after signing up navigate the user the 'Your Personal' page
          this._router.navigate(['/personal'])
        },
        err => console.log(err)
      )
  }

}
