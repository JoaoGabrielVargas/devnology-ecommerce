import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type CartItem, type CartContextType, type Product } from "../interfaces/interfaces";

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, { ...product, cartId: `${product.id}-${Date.now()}` }])
  };

  const removeFromCart = (cartId: string) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  }

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const itemCount = cart.length;

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      cartTotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  )

}


