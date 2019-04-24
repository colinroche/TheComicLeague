import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Fire } from '../models/firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  comicCollection: AngularFirestoreCollection<Fire>;
  comics: Observable<Fire[]>

  constructor(public firebase: AngularFirestore) { 
    // valueChanges() return collection as an Observable
    this.comics = this.firebase.collection('comics').valueChanges();
  }

  getComics() {
    return this.comics;
  }
}


