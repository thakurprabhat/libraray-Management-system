import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootURL = 'api'
  constructor(private http:HttpClient) {
    console.log("constructor",this.rootURL);
   }

   doLogin() {
    console.log("do login",this.rootURL)
    return this.http.get('api/getUser').subscribe((data) => {
    }, (error) => {
      console.log(error)
    });
   }
}
