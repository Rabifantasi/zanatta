"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Zanatta</h1>
        <div className="hidden md:flex">
          <Link href="/hero" className="mr-4">Home</Link>
          <Link href="/products" className="mr-4">Products</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <Link href="/hero" className="block py-2">Home</Link>
          <Link href="/products" className="block py-2">Products</Link>
          <Link href="/cart" className="block py-2">Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
