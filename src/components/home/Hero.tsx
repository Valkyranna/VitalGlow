'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen md:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop"
          alt="Vital Glow Wellness - Premium Health & Beauty Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-leica-black bg-opacity-30" />
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container-padding">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
              Wellness made
              <span className="block text-white font-light">simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-xl font-light">
              Helping individuals heal their bodies and minds through holistic wellness, nutrition, and self-care.
              Empowering you to thrive in health, beauty, and confidence — even in today&apos;s challenging world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  window.location.href = '/products';
                }}
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-leica-black"
                onClick={() => {
                  window.location.href = '/about';
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;