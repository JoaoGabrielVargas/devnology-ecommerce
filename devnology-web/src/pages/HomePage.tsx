// src/pages/HomePage.tsx
import { useState, useMemo } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/Product/ProductCard';
import SearchAndFilter from '../components/Common/SearchAndFilter';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { FiLoader, FiAlertCircle } from 'react-icons/fi';

const HomePage = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => [...new Set(products.map(p => p.category))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen"> 
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Products</h1>
          <p className="text-center text-gray-600 mb-8">Find the best products for you!</p>

          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <FiLoader className="animate-spin text-4xl text-indigo-600" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-red-500">
              <FiAlertCircle className="text-4xl mb-4" />
              <p className="text-xl">{error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhum produto encontrado</h3>
                  <p className="text-gray-500">Tente ajustar sua busca ou filtros</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;