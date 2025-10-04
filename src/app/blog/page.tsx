'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { Calendar, User, Clock } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Natural Skincare: Why It Works",
    excerpt: "Explore the scientific evidence supporting natural skincare ingredients and how they can transform your skin health without harsh chemicals.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Skincare",
    image: "/images/blog/natural-skincare.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Mindful Morning Rituals for a Balanced Day",
    excerpt: "Discover simple yet powerful morning practices that can set the tone for a more mindful, productive, and peaceful day.",
    author: "Emma Williams",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Wellness",
    image: "/images/blog/morning-rituals.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Understanding Hormonal Balance: A Women's Health Guide",
    excerpt: "Learn about the key factors affecting hormonal health and natural approaches to achieving balance throughout different life stages.",
    author: "Dr. Michael Chen",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Health",
    image: "/images/blog/hormonal-balance.jpg",
    featured: false
  },
  {
    id: 4,
    title: "The Power of Herbal Teas: Ancient Wisdom for Modern Wellness",
    excerpt: "Explore how traditional herbal teas can support everything from digestion to sleep, backed by both ancient wisdom and modern research.",
    author: "Lisa Park",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Wellness",
    image: "/images/blog/herbal-teas.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Building a Sustainable Self-Care Practice",
    excerpt: "Learn how to create a self-care routine that lasts, focusing on consistency over intensity and finding what truly nourishes you.",
    author: "Rachel Green",
    date: "2024-01-01",
    readTime: "5 min read",
    category: "Self-Care",
    image: "/images/blog/self-care-practice.jpg",
    featured: true
  }
];

const categories = ["All", "Skincare", "Wellness", "Health", "Self-Care"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-leica-gray-light w-full h-full"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedWrapper animation="fadeIn" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-leica-black mb-8 leading-tight tracking-tight">
              Vital Glow Blog
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              Insights, tips, and inspiration for your wellness journey.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container-padding">
        <AnimatedWrapper animation="fadeIn" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-vital-green text-white'
                    : 'bg-leica-gray text-leica-black hover:bg-leica-gray-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedWrapper>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="container-padding mb-16">
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <h2 className="leica-section-title mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                      <div className="bg-leica-gray w-full h-full"></div>
                      <div className="absolute inset-0 bg-leica-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-leica-gray-dark">
                        <span className="bg-vital-green text-white px-3 py-1 rounded-full text-xs mr-3">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-2xl font-light text-leica-black group-hover:text-vital-green transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-leica-gray-dark leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-leica-gray-dark">
                        <User size={14} className="mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedWrapper>
        </section>
      )}

      {/* Regular Posts */}
      <section className="container-padding">
        <AnimatedWrapper animation="slideUp" delay={0.5}>
          <h2 className="leica-section-title mb-8">
            {selectedCategory === "All" ? "Recent Articles" : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <div className="bg-leica-gray w-full h-full"></div>
                    <div className="absolute inset-0 bg-leica-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-leica-gray-dark">
                      <span className="bg-leica-gray text-leica-black px-2 py-1 rounded text-xs mr-2">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-light text-leica-black group-hover:text-vital-green transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-leica-gray-dark text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-leica-gray-dark">
                      <User size={12} className="mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedWrapper>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding container-padding">
        <AnimatedWrapper animation="fadeIn" delay={0.6}>
          <div className="bg-leica-gray-light p-12 rounded-lg text-center">
            <h2 className="leica-section-title mb-4">Stay Connected</h2>
            <p className="text-lg text-leica-gray-dark mb-8 max-w-2xl mx-auto">
              Get the latest wellness tips, product updates, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
              />
              <button className="bg-vital-green text-white px-8 py-3 tracking-wide text-sm font-medium hover:bg-vital-green-hover transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedWrapper>
      </section>
    </div>
  );
}