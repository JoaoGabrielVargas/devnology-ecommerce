import { ProductCard } from "../components/Product/ProductCard";
import { useProducts } from "../hooks/useProducts";

const HomePage = () => {
  const { products, loading, error } = useProducts();
  
  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Produtos</h1>
        <div className="text-center">
          <p>Carregando produtos...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Produtos</h1>
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;