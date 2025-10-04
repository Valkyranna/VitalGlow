'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const CartDrawer: React.FC = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getTotalPrice } = useCart();


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-leica-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-leica-gray">
            <h2 className="text-xl font-serif font-medium text-leica-black">
              Shopping Cart
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-leica-black hover:text-vital-green transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-leica-gray-dark mb-4" />
                <p className="text-leica-gray-dark mb-4">Your cart is empty</p>
                <Button 
                  variant="primary"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/';
                  }}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 pb-4 border-b border-leica-gray">
                    <div className="w-20 h-20 bg-leica-gray-light rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-leica-black font-medium mb-1">{item.name}</h3>
                      <p className="text-leica-gray-dark">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-leica-black hover:text-vital-green transition-colors duration-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-leica-black hover:text-vital-green transition-colors duration-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-leica-black hover:text-red-500 transition-colors duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-leica-gray p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-leica-black">Total</span>
                <span className="text-lg font-medium text-leica-black">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              
              <Link href="/checkout">
                <Button
                  variant="primary"
                  className="w-full mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  Proceed to Checkout
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/';
                }}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;