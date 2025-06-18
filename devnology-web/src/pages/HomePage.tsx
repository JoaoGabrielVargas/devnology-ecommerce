// src/pages/HomePage.tsx
import { useState, useMemo } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/Product/ProductCard';
import CategorySidebar from '../components/Common/CategorySidebar'; 
import SearchInput from '../components/Common/SearchInput'; 
import { FiLoader, FiAlertCircle } from 'react-icons/fi';

const HomePage = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <SearchInput 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 flex-shrink-0">
              <CategorySidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            <div className="flex-grow">
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
                  <h2 className="text-xl font-semibold mb-4">
                    {selectedCategory || 'All products'}
                    <span className="text-gray-500 ml-2 text-sm font-normal">
                      ({filteredProducts.length} products)
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                      <h3 className="text-xl font-medium text-gray-700 mb-2">
                        No products find
                      </h3>
                      <p className="text-gray-500">
                        Try to adjust your search or select another category
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;