import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return true
    // if (this.authService.isAuthenticatedUser()) {
    //   return true;
    // } else {
    //   // Redirigir a la página de inicio de sesión si no está autenticado
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
