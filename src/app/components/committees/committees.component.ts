import { Component } from '@angular/core';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css'],
})
export class CommitteesComponent {
  slideConfig1 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    
  };
}
