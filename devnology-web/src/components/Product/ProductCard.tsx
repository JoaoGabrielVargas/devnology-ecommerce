import { type ProductCardProps } from '../../interfaces/interfaces';
import useCartContext from '../../hooks/useCartContext';


const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartContext();
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">R$ {product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


