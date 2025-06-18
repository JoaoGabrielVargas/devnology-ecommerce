import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import OrdersPage from './pages/OrdersPage';
import QuickViewModal from './components/Common/QuickViewModal';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartProvider from './context/CartContext';
import { QuickViewProvider } from './context/QuickViewContext';

function App() {
  return (
    <QuickViewProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <QuickViewModal />
      </CartProvider>
    </QuickViewProvider>
  );
}

export default App;