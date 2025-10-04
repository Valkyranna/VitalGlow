'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import Button from '@/components/ui/Button';

interface AddToCartProps {
  product: Product;
  className?: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ product, className = '' }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsOpen(true);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-leica-black">Quantity:</span>
        <div className="flex items-center border border-leica-gray">
          <button
            onClick={decrementQuantity}
            className="p-2 text-leica-black hover:text-vital-green transition-colors duration-200"
            disabled={quantity <= 1}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="p-2 text-leica-black hover:text-vital-green transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </Button>
      
      {product.inStock && (
        <p className="text-sm text-leica-gray-dark text-center">
          Free shipping on orders over $75
        </p>
      )}
    </div>
  );
};

export default AddToCart;