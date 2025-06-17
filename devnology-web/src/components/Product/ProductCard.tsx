// src/components/Product/ProductCard.tsx
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { type Product } from '../../interfaces/interfaces';
import  useCartContext  from '../../hooks/useCartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartContext();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative pb-[70%]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute h-full w-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate">{product.name}</h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {product.provider === 'brazilian' ? 'BR' : 'EU'}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-indigo-700">R$ {product.price}</span>
          <button 
            onClick={() => addToCart({ ...product})}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
            aria-label="Add to cart"
          >
            <FiShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;