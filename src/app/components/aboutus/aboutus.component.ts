import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent {
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    dots: true,
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
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1.05,
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
    swipe: false,
    fade: true,
    asNavFor: '.the-secretariat-slide_for_ngx',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          swipe: true,
        },
      },
    ],
  };
  slideConfig4 = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true,
    asNavFor: '.the-secretariat-slide_ngx',
    centerMode: false,
    focusOnSelect: true,
    customPaging: function (slick: any, index: any) {
      // return '<a>' + (index + 1) + '</a>';
      // return  (index + 1) + '/' + slick.slideCount;
    },
  };

  constructor() {}
  ngOnInit(): void {}
}
