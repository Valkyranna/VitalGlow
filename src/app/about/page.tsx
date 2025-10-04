import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop"
            alt="About Vital Glow Wellness"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-leica-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedWrapper animation="fadeIn" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
              Our Story
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Welcome to Vital Glow Wellness 🌿
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedWrapper animation="slideUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="leica-section-title">
                Empowering Your Wellness Journey
              </h2>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fadeIn" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <p className="text-lg text-leica-black leading-relaxed mb-6 font-light">
                  I'm so excited to finally share this space with you. ✨ Vital Glow Wellness was born out of my own journey — navigating PCOS, chronic illness, and the ups and downs of finding healing in today's world.
                </p>
                <p className="text-lg text-leica-black leading-relaxed mb-6 font-light">
                  I know how overwhelming it can feel, and my goal is to make health and wellness simple, practical, and empowering for everyday life.
                </p>
                <p className="text-lg text-leica-black leading-relaxed font-light">
                  Here, you'll find tips on holistic nutrition & supplements, healing hair + skin naturally, chronic illness & hormone balance support, and mindset, stress relief, and self-care practices.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1614806687007-2215a9db3b1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHNlbGYlMjBjYXJlfGVufDB8fDB8fHwy"
                  alt="Wellness Journey"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animation="slideUp" delay={0.6}>
            <div className="text-center bg-leica-gray-light p-12 rounded-lg">
              <p className="text-xl text-leica-black mb-8 font-light">
                This is a safe space where we learn, grow, and glow together 🌸
              </p>
              <p className="text-lg text-leica-black mb-8 font-light">
                💬 Tell me — what's one health or self-care goal you want to focus on this month?
              </p>
              <Link href="/products">
                <Button variant="primary" size="lg">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding container-padding bg-leica-gray-light">
        <div className="max-w-6xl mx-auto">
          <AnimatedWrapper animation="fadeIn" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="leica-section-title">
                Our Values
              </h2>
            </div>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedWrapper animation="slideUp" delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-vital-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-light text-leica-black mb-4">
                  Holistic Approach
                </h3>
                <p className="text-leica-gray-dark font-light leading-relaxed">
                  We believe in treating the whole person — mind, body, and spirit — for complete wellness.
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slideUp" delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 bg-vital-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-light text-leica-black mb-4">
                  Quality First
                </h3>
                <p className="text-leica-gray-dark font-light leading-relaxed">
                  Every product is carefully selected and tested to ensure the highest quality and effectiveness.
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slideUp" delay={0.5}>
              <div className="text-center">
                <div className="w-20 h-20 bg-vital-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-light text-leica-black mb-4">
                  Community Support
                </h3>
                <p className="text-leica-gray-dark font-light leading-relaxed">
                  We're building a supportive community where everyone can share their wellness journey.
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding container-padding">
        <AnimatedWrapper animation="fadeIn" delay={0.2}>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="leica-section-title mb-8">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-lg text-leica-black mb-12 font-light">
              Explore our curated collection of wellness products designed to support your journey to optimal health and natural beauty.
            </p>
            <Link href="/products">
              <Button variant="primary" size="lg">
                Shop Our Collection
              </Button>
            </Link>
          </div>
        </AnimatedWrapper>
      </section>
    </div>
  );
}