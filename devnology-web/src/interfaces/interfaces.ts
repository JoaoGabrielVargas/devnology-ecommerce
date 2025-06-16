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
}

