import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
