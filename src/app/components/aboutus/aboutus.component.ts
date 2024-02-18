import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements AfterViewInit, OnInit {
  // swiper: Swiper;

  SwiperOptionsOne = {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    // navigation: {
    //   nextEl: '.button-next',
    //   prevEl: '.button-prev',
    //   // clickable: true,
    // },
    // autoHeight: true,
    // calculateHeight:true,

    // observer: true,
  };
  // private swiper = new Swiper('.mySwiper');
  // private swiper: Swiper;

  
  SwiperOptions = {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 8,
    spaceBetween: 10,
  };

  constructor() {
    // this.swiper = new Swiper('.mySwiper', {
    //   // your Swiper options
    // });
  }

  ngOnInit() {
    // this.swiper = new Swiper('.container-slide', {
    //   navigation: {
    //     nextEl: '.button-next',
    //     prevEl: '.button-prev',
    //   },
    // });
  }
  // onSlideNext() {
  //   if (this.swiper)  {
  //     this.swiper.slideNext(); // Llama al método slideNext() al hacer clic en el botón
  //   }
  // }

  // onSlidePrev() {
  //   console.log("test slide");
  //   if (this.swiper) {
  //     this.swiper.slidePrev();
  //   }
  // }
  ngAfterViewInit() {
    const swiperContainer = document.querySelector(
      'swiper-container.mySwiper2'
    );
    const swiperContainerOne = document.querySelector(
      'swiper-container.mySwiper'
    );
    if (swiperContainer) {
      Object.assign(swiperContainer, this.SwiperOptions);
    }
    if (swiperContainerOne) {
      Object.assign(swiperContainerOne, this.SwiperOptionsOne);
      // Object.assign(swiperContainer,this.SwiperOptions2)
    }
    // Elementos de navegación
    // const nextButton = document.querySelector('.button-next');
    // const prevButton = document.querySelector('.button-prev');
  }
}
