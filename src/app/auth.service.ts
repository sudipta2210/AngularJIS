import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal(false);

  constructor() {
    // Check if token exists in localStorage on initialization
    const token = localStorage.getItem('Mytoken');
    if (token) {
      this.isAuthenticated.set(true);
    }
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated.set(value);
  }

  getIsAuthenticated() {
    return this.isAuthenticated();
  }
}
