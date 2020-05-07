import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-picture',
  templateUrl: './select-picture.component.html',
})
export class SelectPictureComponent implements OnInit {

  images = [
    { url: 'https://storage.cloud.google.com/referencee-web-storage/bear.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/fox.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/jellyfish.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/lamb.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/llama.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/octopus.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/owl.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/rabbit.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/unicorn.png' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/whale.png' }
  ];

  @Output() selectedImageURL = new EventEmitter<string>();
  localSelectedImageURL = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectImage(url) {
    this.selectedImageURL.emit(url);
    this.localSelectedImageURL = url;
  }

  onUnselectImage() {
    this.selectedImageURL.emit(null);
    this.localSelectedImageURL = null;
  }

}
