import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  login(username: string, password: string): boolean {
    // Verificar las credenciales (puedes implementar lógica de autenticación aquí)
    if (username === environment.authentication.username && password === environment.authentication.password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  constructor() {}
  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
