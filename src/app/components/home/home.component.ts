import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  activeBlock: string = 'textBlock1'; 
  activeButton: string = 'textBlock1'; 

  showTextBlock(id: string): void {
    this.activeBlock = id;
    this.activeButton = id;
    const textBlocks = document.querySelectorAll('div[id^="textBlock"]');
    textBlocks.forEach((block) => {
      block.classList.add('hidden');
    });

    const selectedBlock = document.getElementById(id);
    if (selectedBlock) {
      selectedBlock.classList.remove('hidden');
    }
  }
}
