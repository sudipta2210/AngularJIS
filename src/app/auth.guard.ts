import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService); //DI
  const router = inject(Router); //DI

  if (authService.getIsAuthenticated()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
