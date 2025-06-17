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