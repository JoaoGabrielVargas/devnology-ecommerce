import { Link } from 'react-router-dom';
import { useCartContext } from '../../hooks/useCartContext'

export const Header = () => {
  const { itemCount } = useCartContext();
  return (
    <header className='bg-blue-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-xl font-bold'>Devnology Shop</Link>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link to="/cart" className="flex items-center">
                Cart items: {itemCount > 0 && `${itemCount}`}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};