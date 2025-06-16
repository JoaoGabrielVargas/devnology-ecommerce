import useCartContext from "../../hooks/useCartContext"
import type { CartItemProps } from "../../interfaces/interfaces";

const CartItem = ({item}: CartItemProps) => {
  const { removeFromCart } = useCartContext();

  return (
    <div className="flex items-center border-b py-4">
      <img 
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="ml-4 flex-grow"> 
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">R$ {item.price}</p>
      </div>
      <button 
        onClick={() => removeFromCart(item.cartId)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;