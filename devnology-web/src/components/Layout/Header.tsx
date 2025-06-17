// src/components/Layout/Header.tsx
import { Link } from 'react-router-dom';
import useCartContext  from '../../hooks/useCartContext';
import { FiShoppingCart, FiHome } from 'react-icons/fi';

const Header = () => {
  const { itemCount } = useCartContext();

  return (
    <header className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold hover:text-indigo-200 transition-colors"
          >
            <FiHome className="text-2xl" />
            <span>Devnology Shop</span>
          </Link>
          
          <nav>
            <Link 
              to="/cart" 
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors relative"
            >
              <FiShoppingCart className="text-xl" />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-indigo-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;