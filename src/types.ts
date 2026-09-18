export type PetSize = 'PP' | 'P' | 'M' | 'G' | 'GG';

export type PetCategory = 'todos' | 'sueteres' | 'chuva' | 'moletons' | 'acessorios' | 'pijamas';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  tag?: string;
  category: PetCategory;
  price: number;
  originalPrice?: number;
  sizes: PetSize[];
  colors: ProductColor[];
  petSuitability: 'cães e gatos' | 'cães' | 'gatos';
  image: string;
  rating: number;
  reviewsCount: number;
  description: string;
  material: string;
  fitNotes: string;
  isBestSeller?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: PetSize;
  selectedColor: ProductColor;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  petName: string;
  petBreed: string;
  ownerName: string;
  comment: string;
  rating: number;
  image: string;
  productName: string;
  sizeBought: PetSize;
}

export interface BreedSizeInfo {
  breed: string;
  suggestedSize: PetSize;
  avgWeight: string;
  chestRange: string;
  neckRange: string;
  tip: string;
}
