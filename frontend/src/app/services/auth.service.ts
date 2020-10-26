import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentinals) {
    this.http
      .post<any>('http://localhost:58655/api/auth', credentinals)
      .subscribe((response) => {
        this.authenticate(response);
      });
  }

  login(credentinals) {
    this.http
      .post<any>('http://localhost:58655/api/auth/login', credentinals)
      .subscribe((response) => {
        this.authenticate(response);
      });
  }

  authenticate(response) {
    localStorage.setItem('token', response.token);

    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
