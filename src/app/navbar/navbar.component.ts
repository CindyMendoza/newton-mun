import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  isOpen: boolean = false;
  isSticky: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  
  toggleMenu() {
    this.isOpen = !this.isOpen
  }
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.isSticky = scrollPosition >= 50;
  }
}
