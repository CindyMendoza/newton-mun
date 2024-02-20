import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent {
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    dots: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    dots: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  slideConfig3 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: false,
    arrows: false,
    swipe:false,
    asNavFor: '.the-secretariat-slide_for_ngx',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          swipe:true,
        },
      },
    ],
  };
  slideConfig4 = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: false,
    arrows: true,
    asNavFor: '.the-secretariat-slide_ngx',
    centerMode: false,
    focusOnSelect: true,    
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() {}
  ngOnInit(): void {}
}