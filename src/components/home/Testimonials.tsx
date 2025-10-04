'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, NY',
    text: 'Vital Glow Wellness has completely transformed my skincare routine. The products are amazing and I have never felt more confident in my own skin.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    text: 'The wellness teas have become a daily ritual for me. They help me stay centered and focused throughout the day. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    text: 'I love the mindfulness journal. It has helped me develop a consistent self-care practice and I feel more balanced than ever before.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding container-padding bg-leica-gray-light">
      <div className="max-w-6xl mx-auto">
        <AnimatedWrapper animation="fadeIn" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="leica-section-title">
              What Our Community Says
            </h2>
            <p className="text-lg text-leica-gray-dark max-w-2xl mx-auto font-light">
              Real stories from real people who have transformed their wellness journey with Vital Glow.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedWrapper
              key={testimonial.id}
              animation="slideUp"
              delay={0.3 + index * 0.1}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-vital-green text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-leica-black mb-6 leading-relaxed font-light italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-leica-black font-medium">{testimonial.name}</p>
                    <p className="text-leica-gray-dark text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;