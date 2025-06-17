import { Link, useLocation } from "react-router-dom"

const ConfirmationPage = () => {
  const { state } = useLocation();
  const order = state?.order;
  return (
    <main className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-4">Order confirmed!</h1>
        <p className="mb-6">Thank you for your purchase. Your order is being processed.</p>
        {order && (
          <div className="mt-6 text-left">
            <h2 className="font-medium mb-2">Resumo do pedido:</h2>
            <p>Number: #{order.id}</p>
            <p>Total: R$ {order.total.toFixed(2)}</p>
            <p>Items: {order.products.length}</p>
          </div>
        )}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Back to products
        </Link>
      </div>
    </main>
  )
}

export default ConfirmationPage;