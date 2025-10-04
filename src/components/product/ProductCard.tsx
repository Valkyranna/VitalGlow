'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = ''
}) => {
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
    setIsOpen(true);
  };

  return (
    <div className={`product-card group relative bg-white ${className}`}>
      <Link href={`/products/${product.slug}`}>
        <div className="relative overflow-hidden aspect-[3/4]">
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="product-overlay absolute inset-0 bg-leica-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          
          {/* Quick View Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                // Handle quick view or navigate to product
                window.location.href = `/products/${product.slug}`;
              }}
            >
              View Product
            </Button>
          </div>
        </div>
      </Link>
      
      <div className="p-6 md:p-8">
        <div className="mb-4">
          <span className="leica-category">
            {product.category}
          </span>
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg md:text-xl font-['Author_Light'] text-leica-black mb-4 hover:text-vital-green transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <p className="leica-price mb-6">
          ${product.price.toFixed(2)}
        </p>
        
        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;