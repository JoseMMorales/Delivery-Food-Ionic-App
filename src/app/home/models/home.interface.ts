export interface SlideOpts {
  freeMode?: boolean;
  slidesPerView: number;
  slidesOffSetBefore?: number;
  spaceBetween: number;
  centerSlides?: boolean;
}

export interface Category {
  img: string;
  title: string;
}

export interface Highlight {
  img: string;
}

export interface Feature {
  distance: string;
  img: string;
  name: string;
  rating: string;
  ratings: string;
}
