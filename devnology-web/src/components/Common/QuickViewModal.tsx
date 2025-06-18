// src/components/QuickViewModal/QuickViewModal.tsx
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { useQuickView } from '../../context/QuickViewContext';
import useCartContext from '../../hooks/useCartContext';
import { useState, useEffect } from 'react';

const QuickViewModal = () => {
  const { selectedProduct, closeQuickView } = useQuickView();
  const { addToCart } = useCartContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProduct]);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(closeQuickView, 300); 
  };

  if (!selectedProduct) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-gray-300 transition-opacity duration-300 ${isVisible ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}
        onClick={closeModal}
        style={{ zIndex: 20 }} 
      />

      <div 
        className={`fixed inset-0 flex items-center justify-center p-4 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 50 }} 
      >
        <div 
          className={`bg-white rounded-lg shadow-xl transform transition-all duration-300 w-1/4 ${isVisible ? 'translate-y-0' : 'translate-y-6'}`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="w-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              
              <div className="w-full">
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-2">
                    {selectedProduct.provider === 'brazilian' ? 'Brazilian Provider' : 'European Provider'}
                  </span>
                  <p className="text-gray-600">{selectedProduct.category}</p>
                </div>

                <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-700">
                    R$ {selectedProduct.price}
                  </span>
                  <button
                    onClick={() => {
                      addToCart({ ...selectedProduct });
                      closeModal();
                    }}
                    className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <FiShoppingCart className="mr-2" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;