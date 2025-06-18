// src/pages/OrdersPage.tsx
import { useEffect, useState } from 'react';
import { type Order } from '../interfaces/interfaces';
import { getOrders } from '../services/api';
import { FiCalendar, FiDollarSign, FiPackage } from 'react-icons/fi';
// import { format } from 'date-fns';
// import { ptBR } from 'date-fns/locale';

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response);
      } catch (err) {
        setError('Error fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg">Can't find any orders</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Order #{order.id}</h2>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <FiCalendar className="mr-1" />
                    <span>
                      {/* {format(new Date(order.createdAt), "PPpp", { locale: ptBR })} */}
                    </span>
                  </div>
                </div>
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  {order.status || 'Finished order'}
                </div>
              </div>

              <div className="border-t border-b border-gray-100 py-4 my-4">
                {order.products.map((product, index) => (
                  <div key={index} className="flex py-2">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-gray-600 text-sm">1 un. × R$ {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-700">
                  <FiPackage className="mr-2" />
                  <span>{order.products.length} ite{order.products.length > 1 ? 'ms' : 'm'}</span>
                </div>
                <div className="flex items-center font-bold text-lg">
                  <FiDollarSign className="mr-1" />
                  <span>R$ {order.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;