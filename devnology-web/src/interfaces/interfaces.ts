export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  provider: string;
};

export interface ProductCardProps {
  product: Product;
};

export interface CartItem extends Product {
  cartId: string;
};

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
};

export interface CartItemProps {
  item: {
    cartId: string;
    name: string;
    price: number;
    image: string;
  }
};

export interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export interface QuickViewContextType {
  selectedProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
};

export interface Order {
  id: number;
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
  }[];
  total: number;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  createdAt: string;
  status?: string;
};