export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  ingredients?: string;
  benefits?: string[];
  usage?: string;
  category: string;
  images: {
    main: string;
    gallery: string[];
  };
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}