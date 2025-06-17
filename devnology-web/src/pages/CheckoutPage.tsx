import { useState } from "react";
import useCartContext from "../hooks/useCartContext"
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

const CheckoutPage = () => {
  const { cart, cartTotal, itemCount, clearCart } = useCartContext();
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerAddress: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        ...formData,
        products: cart,
        total: cartTotal
      }

      const response = await createOrder(orderData);
      console.log("response", response)
      clearCart();
      navigate('/confirmation', {state: {order: response} });
    } catch (error) {
      console.error("Error finishing order")
    } finally {
      setIsSubmitting(false);
    }
  }

  if (itemCount === 0) {
    return (
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-lg mb-4">Your cart is empty</p>
        <a href="/" className="text-blue-600 hover:underline">
          Back to products list
        </a>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Finish order</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="customerName" className="block mb-1">Full name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="customerEmail" className="block mb-1">Email</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="customerAddress" className="block mb-1">Address</label>
          <input
            type="text"
            id="customerAddress"
            name="customerAddress"
            value={formData.customerAddress}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-lg font-medium mb-4">
            <span>Total:</span>
            <span>R$ {cartTotal.toFixed(2)}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'Finish order'}
          </button>
        </div>
      </form>
    </main>
  );
};

export default CheckoutPage;