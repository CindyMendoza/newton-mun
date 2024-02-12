import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  assets = {
    logoNewton: {
      url: 'assets/navbar/logo-mob-header-newton-mun.png',
      alt: 'Logo de Newton',
    },
    // icon: 'assets/icon.png',
  }; // Define la propiedad
}
