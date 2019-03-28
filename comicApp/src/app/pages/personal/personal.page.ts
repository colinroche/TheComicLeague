import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  personalComic = []

  // inject the PersonalService
  constructor(private _personalService: PersonalService, private _router: Router) { }

    ngOnInit() {
      this._personalService.getPersonal()
        .subscribe(
          res => this.personalComic = res,
          err => {
              // if verification fails in backend and sends error of status(401) navigate to login
              if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                    this._router.navigate(['/login'])
                  }
              }
          }
        )
    }

}
