import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  selectedTab: string = 'tab1';
  // isModalOpen = false;
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
  // openModal() {
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  // }
  isModalOpen = false;
  modalImageUrl: string | undefined;
  currentIndex = 0;
  images: string[] = [
    '../assets/images/gallery/newton-mun-2023/DSC00171.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2586.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2441.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2512.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2375.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2465.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2528.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2305.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2572.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2627.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2403.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2350.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2256.JPG',
    '../assets/images/gallery/newton-mun-2023/IMG_2258.JPG',
    
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
}
