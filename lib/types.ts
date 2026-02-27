export type CardStatus = 'Available' | 'Showcase' | 'Sold';

export interface Card {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  year: number;
  status: CardStatus;
  grade: string;
  price: string;
  frontImage: string;
  gallery: string[];
  description: string;
  notes: string[];
  updatedAt: string;
  featured: boolean;
}
