'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Search, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = [
    'fixed top-0 left-0 right-0 z-40 transition-all duration-200',
    isScrolled 
      ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-sm' 
      : 'bg-transparent'
  ].join(' ');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`${navClasses} font-sans`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-leica-black hover:text-vital-green px-3 py-2 text-sm font-normal transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <button 
              className="p-2 text-leica-black hover:text-vital-green transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 text-leica-black hover:text-vital-green transition-colors duration-200"
              aria-label="User account"
            >
              <User size={20} />
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-leica-black hover:text-vital-green transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-vital-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;