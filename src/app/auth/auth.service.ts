import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = true;
  constructor(private router: Router) { }
  isAuthenticated() {
    if (this.isLoggedIn) {
      return this.isLoggedIn
    }
    else {
      this.router.navigate(['/login'])
      return this.isLoggedIn
    }
  }
}
