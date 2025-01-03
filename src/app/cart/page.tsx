"use client"; // Ensures the component runs on the client side

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve stored cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4 space-y-2">
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex flex-col md:flex-row justify-between items-center border-b py-2"
              >
                <div className="flex-1">
                  <span className="text-base md:text-lg font-medium">{product.title}</span>
                </div>
                <span className="text-base md:text-lg font-semibold">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 md:mt-0 md:ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>
            <p className="mt-2 text-sm md:text-base">Shipping details go here.</p>
          </div>
        </>
      )}
      <button
        onClick={() => router.push("/products")}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
