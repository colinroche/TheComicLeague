import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Fire } from '../../models/firebase';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  comics: Fire[];

  // Inject dependency
  constructor(private comicService: FirebaseService) { }

  ngOnInit() {
    this.comicService.getComics().subscribe(comics => {
      this.comics = comics;
    });
  }

}
