"use client"; // Add this line if you are using hooks

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-2xl md:text-xl font-bold">Zanatta</h1>
        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row">
          <Link href="/hero" className="mr-0 sm:mr-6 mb-2 sm:mb-0 text-base sm:text-lg hover:text-gray-300 transition">Home</Link>
          <Link href="/products" className="mr-0 sm:mr-6 mb-2 sm:mb-0 text-base sm:text-lg hover:text-gray-300 transition">Products</Link>
          <Link href="/cart" className="mr-0 sm:mr-6 text-base sm:text-lg hover:text-gray-300 transition">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
