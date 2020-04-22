import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  images = [
    { url: 'https://storage.cloud.google.com/referencee-web-storage/bear.png', id: 'img-bear' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/fox.png', id: 'img-fox' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/jellyfish.png', id: 'img-jellyfish' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/lamb.png', id: 'img-lamb' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/llama.png', id: 'img-llama' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/octopus.png', id: 'img-octopus' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/owl.png', id: 'img-owl' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/rabbit.png', id: 'img-rabbit' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/unicorn.png', id: 'img-unicorn' },
    { url: 'https://storage.cloud.google.com/referencee-web-storage/whale.png', id: 'img-whale' }
  ];

  selectedImageId = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectImage(id) {
    this.selectedImageId = id;
  }

  onUnselectImage(id) {
    this.selectedImageId = '';
  }
}
