import { Component, AfterViewInit } from '@angular/core';
// import Swiper from 'swiper';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements AfterViewInit {
  SwiperOptions = {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 8,
    spaceBetween: 10,
   
  };
  
 
  constructor() {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    
    const swiperContainer = document.querySelector('swiper-container.mySwiper2');
    if(swiperContainer){
      Object.assign(swiperContainer,this.SwiperOptions)
      // Object.assign(swiperContainer,this.SwiperOptions2)
    }
  }
}


