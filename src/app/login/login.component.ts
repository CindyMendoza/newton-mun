import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirigir a la página principal después de iniciar sesión
      // o a la ruta original si existe.
      const redirectUrl = '/home';
      this.router.navigate([redirectUrl]);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
