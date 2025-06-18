// src/context/QuickViewContext.tsx
import { createContext, useContext, useState } from 'react';
import { type Product, type QuickViewContextType } from '../interfaces/interfaces';

const QuickViewContext = createContext<QuickViewContextType | undefined>(undefined);

export const QuickViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; 
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <QuickViewContext.Provider value={{ selectedProduct, openQuickView, closeQuickView }}>
      {children}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error('useQuickView must be used within a QuickViewProvider');
  }
  return context;
};