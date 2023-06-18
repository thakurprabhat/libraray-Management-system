import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootURL = 'api';
  isAuthenicate: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  doLogin(data: any) {
    const userData = { username: data.userName, password: data.password };
    return this.http.post('api/auth', { ...userData }).subscribe(
      (data: any) => {
        console.log("call ------");
        // this.isAuthenicate = data?.isAuthenticate;
        this.isAuthenicate = true;
        console.log(this.isAuthenicate)
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAuthStatus(): boolean {
    return this.isAuthenicate;
  }

  setAuthStatus(isAuthenicate: boolean) {
    this.isAuthenicate = isAuthenicate;
  }

}
