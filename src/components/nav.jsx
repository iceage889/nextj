"use client";

import { useState } from "react";
import { Heart, ShoppingCart, User, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="p-4 shadow-sm border-b">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold">Exclusive</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">Contact</li>
          <li className="cursor-pointer hover:text-gray-600">About</li>
          <li className="cursor-pointer hover:text-gray-600">Sign Up</li>
        </ul>

        {/* Right - Search and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-1">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-48"
            />
            <Search className="w-4 h-4 text-gray-600" />
          </div>

          {/* Icons */}
          <div className="relative">
            <Heart className="w-6 h-6 cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5">
              4
            </span>
          </div>
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-600">Home</li>
            <li className="hover:text-gray-600">Contact</li>
            <li className="hover:text-gray-600">About</li>
            <li className="hover:text-gray-600">Sign Up</li>
          </ul>

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-full"
            />
            <Search className="w-4 h-4 text-gray-600" />
          </div>

          {/* Mobile Icons */}
          <div className="flex space-x-6 items-center">
            <div className="relative">
              <Heart className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5">
                4
              </span>
            </div>
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
