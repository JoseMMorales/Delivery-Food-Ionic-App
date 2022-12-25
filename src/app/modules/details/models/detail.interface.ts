export interface DetailData {
  about: string;
  distance: string;
  food: Food[];
  img: string;
  name: string;
  rating: string;
  ratings: string;
  tags: string[];
}

export interface Food {
  category: string;
  meals: Meal[];
}

export interface Meal {
  img: string;
  info: string;
  name: string;
  price: number;
}
