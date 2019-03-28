import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  personalComic = []

  // inject the PersonalService
  constructor(private _personalService: PersonalService) { }

    ngOnInit() {
      this._personalService.getPersonal()
        .subscribe(
          res => this.personalComic = res,
          err => console.log(err)
        )
    }

}
