import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<boolean>();
  // imageUrl: string | undefined;

  // openModal(imageUrl: string) {
  //   this.imageUrl = imageUrl;
  //   console.log(this.imageUrl);
    
  // }

  closeModal() {
    // this.imageUrl = undefined;
    this.closeModalEvent.emit(true);
  }
}
