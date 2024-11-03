export interface Staff {
  id: string;
  name: string;
  role: string;
  category: 'manager' | 'dancer' | 'courtesan' | 'bartender' | 'security' | 'dealer' | 'dj' | 'photographer';
  image: string;
  description: string;
  schedule: string[];
  nsfwPreferences?: string[];
}

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: number;
  pricePerHour: number;
  amenities: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  featured: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  nsfw: boolean;
  photographer: string;
  date: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cocktails' | 'softDrinks' | 'food';
  image?: string;
}