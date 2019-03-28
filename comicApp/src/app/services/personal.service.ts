import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  // set variable to store back-end API URL
  private _personalUrl ="http://localhost:8081/api/personal"
  // inject HttpClient
  constructor(private http: HttpClient) { }

  getPersonal() {
    return this.http.get<any>(this._personalUrl)
  }
}
