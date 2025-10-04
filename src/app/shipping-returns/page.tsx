import React from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ShippingReturnsPage() {
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
              Shipping & Returns
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              Everything you need to know about getting your Vital Glow products and our return policy.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          {/* Shipping Information */}
          <AnimatedWrapper animation="slideUp" delay={0.3}>
            <div className="mb-16">
              <h2 className="leica-section-title mb-8">Shipping Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Processing Time</h3>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    Orders are typically processed within 1-2 business days. You'll receive a confirmation email once your order has been shipped.
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    During peak seasons or promotional periods, processing may take an additional 1-2 business days.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Shipping Options</h3>
                  <div className="bg-leica-gray-light p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-leica-gray">
                        <div>
                          <p className="text-leica-black font-medium">Standard Shipping</p>
                          <p className="text-leica-gray-dark text-sm">5-7 business days</p>
                        </div>
                        <p className="text-leica-black font-medium">$10.00</p>
                      </div>
                      
                      <div className="flex justify-between items-center pb-4 border-b border-leica-gray">
                        <div>
                          <p className="text-leica-black font-medium">Express Shipping</p>
                          <p className="text-leica-gray-dark text-sm">2-3 business days</p>
                        </div>
                        <p className="text-leica-black font-medium">$25.00</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-leica-black font-medium">Overnight Shipping</p>
                          <p className="text-leica-gray-dark text-sm">1 business day</p>
                        </div>
                        <p className="text-leica-black font-medium">$45.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Free Shipping</h3>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We offer free standard shipping on all orders over $75 within the United States. The discount will be automatically applied at checkout.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">International Shipping</h3>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    We ship to most countries worldwide. International shipping rates and delivery times vary by destination:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2">
                    <li>Canada: 7-10 business days ($25)</li>
                    <li>Europe: 10-14 business days ($35)</li>
                    <li>Australia & New Zealand: 12-16 business days ($40)</li>
                    <li>Other International: 14-21 business days (rates vary)</li>
                  </ul>
                  <p className="text-leica-gray-dark leading-relaxed mt-4">
                    Please note that international orders may be subject to customs fees and import duties, which are the responsibility of the recipient.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Order Tracking</h3>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    Once your order ships, you'll receive a tracking number via email. You can track your package using:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2">
                    <li>The tracking link in your shipping confirmation email</li>
                    <li>Your account dashboard on our website</li>
                    <li>The carrier's website (USPS, FedEx, UPS, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Returns Information */}
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <div className="mb-16">
              <h2 className="leica-section-title mb-8">Returns & Exchanges</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">30-Day Satisfaction Guarantee</h3>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We stand behind the quality of our products. If you're not completely satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">How to Initiate a Return</h3>
                  <ol className="list-decimal list-inside text-leica-gray-dark space-y-2">
                    <li>Contact our customer service team at support@vitalglow.com with your order number</li>
                    <li>We'll provide you with a return shipping label and instructions</li>
                    <li>Pack the item securely in its original packaging if possible</li>
                    <li>Attach the provided shipping label and drop off at the designated carrier</li>
                    <li>Once we receive and inspect the return, we'll process your refund within 5-7 business days</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Return Conditions</h3>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    To be eligible for a return, items must meet the following conditions:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2">
                    <li>Returned within 30 days of receipt</li>
                    <li>Unused and in the same condition as received</li>
                    <li>In original packaging with all tags attached</li>
                    <li>Not damaged or altered (except for manufacturer defects)</li>
                  </ul>
                  <p className="text-leica-gray-dark leading-relaxed mt-4">
                    Due to hygiene reasons, opened skincare products and supplements cannot be returned unless they arrive damaged or defective.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Refunds</h3>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    Refunds will be processed to your original payment method within 5-7 business days after we receive and inspect your return.
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Shipping costs are non-refundable unless the return is due to our error or a defective product.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Exchanges</h3>
                  <p className="text-leica-gray-dark leading-relaxed">
                    If you'd like to exchange an item for a different size, color, or product, please follow the same return process and place a new order for the desired item. We'll process the refund once we receive the original item.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-leica-black mb-4">Damaged or Incorrect Items</h3>
                  <p className="text-leica-gray-dark leading-relaxed">
                    If you receive a damaged or incorrect item, please contact us immediately at support@vitalglow.com. We'll arrange for a replacement or refund at no additional cost to you.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Contact Section */}
          <AnimatedWrapper animation="fadeIn" delay={0.5}>
            <div className="text-center bg-leica-gray-light p-12 rounded-lg">
              <h2 className="leica-section-title mb-4">Questions About Shipping or Returns?</h2>
              <p className="text-lg text-leica-gray-dark mb-8">
                Our customer service team is here to help with any questions about your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Contact Support
                  </Button>
                </Link>
                <a href="mailto:support@vitalglow.com">
                  <Button variant="outline" size="lg">
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}