'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, User, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsOpen } = useCart();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Scroll handler for home page
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white bg-opacity-100' 
            : isHomePage 
              ? 'bg-transparent' 
              : 'bg-white bg-opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className={`text-3xl font-author tracking-tight transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-leica-black' : 'text-white'}`}>
                Vital Glow
              </h1>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-vital-green text-lg font-author transition-all duration-200 ${isScrolled || !isHomePage ? 'text-leica-black' : 'text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Account */}
              <Link 
                href="/account" 
                className={`hover:text-vital-green transition-all duration-200 ${isScrolled || !isHomePage ? 'text-leica-black' : 'text-white'}`}
                aria-label="Account"
              >
                <User className="w-4 h-4" />
              </Link>

              {/* Cart */}
              <button 
                onClick={() => setIsOpen(true)}
                className={`relative hover:text-vital-green transition-all duration-200 ${isScrolled || !isHomePage ? 'text-leica-black' : 'text-white'}`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-vital-green text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden hover:text-vital-green transition-colors duration-200 ${isScrolled || !isHomePage ? 'text-leica-black' : 'text-white'}`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-leica-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-leica-gray">
                <h2 className="text-xl font-serif text-leica-black">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <X className="w-6 h-6 text-leica-black" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-lg text-leica-black hover:text-vital-green py-2 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-leica-gray">
                <div className="flex items-center justify-between mb-4">
                  <Link href="/account" className="flex items-center text-leica-black hover:text-vital-green">
                    <User className="w-5 h-5 mr-2" />
                    Account
                  </Link>
                  <button 
                    onClick={() => {
                      setIsOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center text-leica-black hover:text-vital-green"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Cart ({getTotalItems()})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;