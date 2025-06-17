import { Link } from "react-router-dom"

const ConfirmationPage = () => {
  return (
      <main className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-4">Order confirmed!</h1>
        <p className="mb-6">Thank you for your purchase. Your order is being processed.</p>
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