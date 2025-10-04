'use client';

import React from 'react';
import Grid from '@/components/ui/Grid';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const ProductShowcase: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="leica-section-title">
            Featured Products
          </h2>
          <p className="text-lg text-leica-gray-dark max-w-2xl mx-auto font-light">
            Discover our carefully selected wellness essentials designed to support your journey to optimal health and natural beauty.
          </p>
        </div>
        
        <Grid cols={3} gap="lg">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </Grid>
        
        <div className="text-center mt-12">
          <button
            onClick={() => {
              window.location.href = '/products';
            }}
            className="leica-link"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;