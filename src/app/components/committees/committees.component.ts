import { Component } from '@angular/core';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent {
  slideConfig1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true,
   
  };
}
