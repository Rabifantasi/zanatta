"use client"; // This line is important to use hooks

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string; // Add image property to the Product interface
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (loading) {
    return <div className="container mx-auto p-6">Loading products...</div>;
  }

  return (
    <div className="container mx-auto p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md bg-white transition-transform duration-200 transform hover:scale-105">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-sm xs:text-base sm:text-lg mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
