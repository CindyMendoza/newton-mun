import { Component } from '@angular/core';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent {
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
}
