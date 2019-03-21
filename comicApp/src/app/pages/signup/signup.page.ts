import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupUserData = {}

  // inject the AuthService
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  // call service passing the user data
  signupUser() {
    this._auth.signupUser(this.signupUserData)
    // subscribe to the observable that is returned
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
