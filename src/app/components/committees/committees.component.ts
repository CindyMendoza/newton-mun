import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css'],
})
export class CommitteesComponent {
  @ViewChild('slickModal')
  slickModal!: SlickCarouselModule;

 
  slideConfig1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
    adaptiveHeight: true,
    focusOnSelect:true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };
  slickInit(e: any) {
   
  }
  
}
