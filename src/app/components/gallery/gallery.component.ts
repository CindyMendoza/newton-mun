import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  selectedTab: string = 'tab1';
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

  isModalOpen = false;
  modalImageUrl: string | undefined;
  currentIndex = 0;
  images: string[] = [
    '../assets/images/gallery/newton-mun-2023/1.jpg',
    '../assets/images/gallery/newton-mun-2023/2.jpg',
    '../assets/images/gallery/newton-mun-2023/3.jpg',
    '../assets/images/gallery/newton-mun-2023/4.jpg',
    '../assets/images/gallery/newton-mun-2023/5.jpg',
    '../assets/images/gallery/newton-mun-2023/6.jpg',
    '../assets/images/gallery/newton-mun-2023/7.jpg',
    '../assets/images/gallery/newton-mun-2023/8.jpg',
    '../assets/images/gallery/newton-mun-2023/9.jpg',
    '../assets/images/gallery/newton-mun-2023/10.jpg',
    '../assets/images/gallery/newton-mun-2023/11.jpg',
    '../assets/images/gallery/newton-mun-2023/12.jpg',
    '../assets/images/gallery/newton-mun-2023/13.jpg',
    '../assets/images/gallery/newton-mun-2023/14.jpg',  
    
  ];
  images2: string[] = [
    '../assets/images/gallery/letsmun/1.jpg',
    '../assets/images/gallery/letsmun/2.jpg',
    '../assets/images/gallery/letsmun/3.jpg',
    '../assets/images/gallery/letsmun/4.jpg',
    '../assets/images/gallery/letsmun/5.jpg',
    '../assets/images/gallery/letsmun/6.jpg',
    '../assets/images/gallery/letsmun/7.jpg',
    '../assets/images/gallery/letsmun/8.jpg',
  ];
  images3: string[] = [
    '../assets/images/gallery/2023-mun-conferences/harvard/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/harvard/2.jpg',
    '../assets/images/gallery/2023-mun-conferences/harvard/3.jpg',
    '../assets/images/gallery/2023-mun-conferences/harvard/4.jpg',
    '../assets/images/gallery/2023-mun-conferences/harvard/5.jpg',
    '../assets/images/gallery/2023-mun-conferences/harvard/6.jpg',
    '../assets/images/gallery/2023-mun-conferences/harvard/7.jpg',

    '../assets/images/gallery/2023-mun-conferences/markham/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/markham/2.jpg',
    '../assets/images/gallery/2023-mun-conferences/markham/3.jpg',

    '../assets/images/gallery/2023-mun-conferences/san-silvestre/1.jpg',

    '../assets/images/gallery/2023-mun-conferences/san-maria/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/san-maria/2.jpg',
    '../assets/images/gallery/2023-mun-conferences/san-maria/3.jpg',

    '../assets/images/gallery/2023-mun-conferences/caritas-pedro/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/caritas-pedro/2.jpg',
    '../assets/images/gallery/2023-mun-conferences/caritas-pedro/3.jpg',
    '../assets/images/gallery/2023-mun-conferences/caritas-pedro/4.jpg',
    '../assets/images/gallery/2023-mun-conferences/caritas-pedro/5.jpg',

    '../assets/images/gallery/2023-mun-conferences/liceo/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/liceo/2.jpg',
 
    '../assets/images/gallery/2023-mun-conferences/carmelitas/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/carmelitas/2.jpg',
    '../assets/images/gallery/2023-mun-conferences/carmelitas/3.jpg',

    '../assets/images/gallery/2023-mun-conferences/byron/1.jpg',
    '../assets/images/gallery/2023-mun-conferences/byron/2.jpg',
    '../assets/images/gallery/2023-mun-conferences/byron/3.jpg',
    '../assets/images/gallery/2023-mun-conferences/byron/4.jpg',


  ];
  images4: string[] = [
    '../assets/images/gallery/tarapoto/1.jpg',
    '../assets/images/gallery/tarapoto/2.jpg',
    '../assets/images/gallery/tarapoto/3.jpg',
    '../assets/images/gallery/tarapoto/4.jpg',
    '../assets/images/gallery/tarapoto/5.jpg',
    '../assets/images/gallery/tarapoto/6.jpg',
    '../assets/images/gallery/tarapoto/7.jpg',
    '../assets/images/gallery/tarapoto/8.jpg',
    '../assets/images/gallery/tarapoto/9.jpg',
    '../assets/images/gallery/tarapoto/10.jpg',
    '../assets/images/gallery/tarapoto/11.jpg',
    '../assets/images/gallery/tarapoto/12.jpg',
    '../assets/images/gallery/tarapoto/13.jpg',
    '../assets/images/gallery/tarapoto/14.jpg',
    '../assets/images/gallery/tarapoto/15.jpg',
    '../assets/images/gallery/tarapoto/16.jpg',
    '../assets/images/gallery/tarapoto/17.jpg',
    '../assets/images/gallery/tarapoto/18.jpg',
    '../assets/images/gallery/tarapoto/19.jpg',
    '../assets/images/gallery/tarapoto/20.jpg',
    '../assets/images/gallery/tarapoto/21.jpg',
    '../assets/images/gallery/tarapoto/22.jpg',
    '../assets/images/gallery/tarapoto/23.jpg',
    '../assets/images/gallery/tarapoto/24.jpg',
    '../assets/images/gallery/tarapoto/25.jpg',
    '../assets/images/gallery/tarapoto/26.jpg',
    '../assets/images/gallery/tarapoto/27.jpg',
    '../assets/images/gallery/tarapoto/28.jpg',
    '../assets/images/gallery/tarapoto/29.jpg',
    '../assets/images/gallery/tarapoto/30.jpg',
    '../assets/images/gallery/tarapoto/31.jpg',
    '../assets/images/gallery/tarapoto/32.jpg',
    '../assets/images/gallery/tarapoto/33.jpg',
    '../assets/images/gallery/tarapoto/34.jpg',
    '../assets/images/gallery/tarapoto/35.jpg',
    '../assets/images/gallery/tarapoto/36.jpg',
    '../assets/images/gallery/tarapoto/37.jpg',
    '../assets/images/gallery/tarapoto/38.jpg',    
  ];
  openModal(imageUrl: string,  index: number) {
    this.modalImageUrl = imageUrl;
    this.currentIndex = index;
    this.isModalOpen = true;
  }

  closeModal() {
    this.modalImageUrl = undefined;
    this.isModalOpen = false;
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.modalImageUrl = this.images[this.currentIndex];

  }
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide2() {
    this.currentIndex = (this.currentIndex + 1) % this.images2.length;
    this.modalImageUrl = this.images2[this.currentIndex];

  }

  prevSlide2() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images2.length) % this.images2.length;
  }

  nextSlide3() {
    this.currentIndex = (this.currentIndex + 1) % this.images3.length;
    this.modalImageUrl = this.images3[this.currentIndex];

  }

  prevSlide3() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images3.length) % this.images3.length;
  }
  nextSlide4() {
    this.currentIndex = (this.currentIndex + 1) % this.images4.length;
    this.modalImageUrl = this.images4[this.currentIndex];

  }

  prevSlide4() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images4.length) % this.images4.length;
  }
}
