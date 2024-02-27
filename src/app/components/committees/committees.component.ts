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
    slidesToShow: 5,
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
          slidesToShow: 3,
          centerPadding: '0px',
        },
      },
    ],
  };
  slickInit(e: any) {
    console.log(e.slick.slickCurrentSlide());
    const slickInstance = e.slick;
    const siguienteSlide = slickInstance.slickNext();
    console.log(e.slick.slickNext());
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
}
