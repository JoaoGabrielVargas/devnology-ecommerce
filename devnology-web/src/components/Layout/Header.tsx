import { Link } from 'react-router-dom';

export const Header = () => {
  return (
      <header className='bg-blue-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to="/" className='text-xl font-bold'>Devnology Shop</Link>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <Link to='/cart'>Carrinho</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
};