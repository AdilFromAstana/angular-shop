import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slides = [
    'https://images.hdqwalls.com/download/nature-background-1920x1080.jpg',
    'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg',
    'https://i.pinimg.com/originals/91/2a/c4/912ac4b7a0b89a5fb0003b1cbdd22c03.jpg',
  ];
  currentSlide = 0;

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  constructor() {}

  ngOnInit(): void {}
}
