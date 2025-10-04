import React from 'react';
import Link from 'next/link';
import SocialMedia from '@/components/ui/SocialMedia';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leica-black text-white">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif mb-4">Vital Glow</h3>
            <p className="text-leica-gray leading-relaxed mb-6">
              Empowering you to thrive in health, beauty, and confidence through holistic wellness solutions.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-medium mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-leica-gray hover:text-white transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=Skincare" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/products?category=Wellness" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Wellness
                </Link>
              </li>
              <li>
                <Link href="/products?category=Supplements" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/products?category=Self-Care" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Self-Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-lg font-medium mb-6">Learn</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-leica-gray hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-leica-gray hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-medium mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:support@vitalglow.com" className="text-leica-gray hover:text-white transition-colors duration-200">
                  support@vitalglow.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-leica-gray hover:text-white transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <Link href="/terms" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-leica-gray hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-leica-gray mt-12 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-medium mb-4">Stay Connected</h4>
              <p className="text-leica-gray mb-6">
                Subscribe to our newsletter for exclusive offers, wellness tips, and new product updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-leica-gray border border-leica-gray text-white placeholder-leica-gray focus:outline-none focus:border-vital-green"
              />
              <button className="bg-vital-green text-white px-8 py-3 tracking-wide text-sm font-medium hover:bg-vital-green-hover transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-leica-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-leica-gray text-sm mb-4 md:mb-0">
              © {currentYear} Vital Glow Wellness. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <SocialMedia variant="horizontal" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;