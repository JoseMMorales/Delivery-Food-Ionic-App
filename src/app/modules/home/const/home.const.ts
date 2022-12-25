import { SlideOpts } from 'src/app/shared/models/slides.interface';

export const catSlideSet: SlideOpts = {
  freeMode: true,
  slidesPerView: 3.5,
  slidesOffSetBefore: 11,
  spaceBetween: 10,
};

export const highlightSlideSet: SlideOpts = {
  slidesPerView: 1.05,
  slidesOffSetBefore: 1,
  centerSlides: true,
  spaceBetween: 10,
};

export const featuresSlideSet: SlideOpts = {
  slidesPerView: 1.2,
  spaceBetween: 10,
  freeMode: true,
};

export const isLocationDetail: boolean = false;
