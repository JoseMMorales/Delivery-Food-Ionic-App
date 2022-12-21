export interface HomeData {
  categories: Category[];
  highlights: Highlight[];
  featured: Featured[];
}

export interface Category {
  img: string;
  title: string;
}

export interface Highlight {
  img: string;
}

export interface Featured {
  distance: string;
  img: string;
  name: string;
  rating: string;
  ratings: string;
}
