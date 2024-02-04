import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  login(username: string, password: string): boolean {
    // Verificar las credenciales (puedes implementar lógica de autenticación aquí)
    if (username === 'newton' && password === 'mun') {
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
