import useCartContext from '../hooks/useCartContext'
import { Link } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';

const CartPage = () => {
  const { cart, cartTotal, itemCount } = useCartContext();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className='text-3xl font-bold mb-8 text-center'>
        Cart
      </h1>
      {itemCount === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to products
          </Link>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem key={item.cartId} item={item} />
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <Link
                to="/checkout"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Continue buying
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;