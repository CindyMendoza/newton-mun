import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  isScrolled: boolean = false;

  constructor() {}

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    this.isScrolled = window.scrollY > 0;
  };
}
