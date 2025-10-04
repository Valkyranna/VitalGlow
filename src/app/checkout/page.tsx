'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment based on selected method
    console.log('Processing payment with:', paymentMethod, formData);
    // Here you would integrate with actual payment processors
    alert('Payment processed successfully! Order confirmed.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="section-padding container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="leica-section-title mb-8">Your Cart is Empty</h1>
            <p className="text-lg text-leica-gray-dark mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link href="/products">
              <Button variant="primary" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding container-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedWrapper animation="fadeIn" delay={0.2}>
            <h1 className="leica-section-title mb-12">Checkout</h1>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Information */}
            <AnimatedWrapper animation="slideUp" delay={0.3}>
              <div className="mb-8">
                <h2 className="text-2xl font-light text-leica-black mb-6">Billing Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-leica-black mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-leica-black mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="123 Main St"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-leica-black mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-leica-black mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                        placeholder="10001"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="United States"
                    />
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2 className="text-2xl font-light text-leica-black mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 border border-leica-gray rounded-lg">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <label htmlFor="card" className="flex items-center cursor-pointer justify-center">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-2">
                          <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
                          <div className="flex">
                            <div className="w-4 h-6 bg-red-500 rounded-l-full"></div>
                            <div className="w-4 h-6 bg-yellow-400 rounded-r-full"></div>
                          </div>
                          <div className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-bold">AMEX</div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center p-4 border border-leica-gray rounded-lg">
                    <input
                      type="radio"
                      id="apple-pay"
                      name="paymentMethod"
                      value="apple-pay"
                      checked={paymentMethod === 'apple-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <label htmlFor="apple-pay" className="flex items-center cursor-pointer justify-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg font-bold"></span>
                        </div>
                        <span className="font-semibold text-leica-black">Pay</span>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center p-4 border border-leica-gray rounded-lg">
                    <input
                      type="radio"
                      id="google-pay"
                      name="paymentMethod"
                      value="google-pay"
                      checked={paymentMethod === 'google-pay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <label htmlFor="google-pay" className="flex items-center cursor-pointer justify-center">
                      <span className="font-semibold text-leica-black">Google Pay</span>
                    </label>
                  </div>

                  <div className="flex items-center p-4 border border-leica-gray rounded-lg">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <label htmlFor="paypal" className="flex items-center cursor-pointer justify-center">
                      <span className="font-semibold text-leica-black">PayPal</span>
                    </label>
                  </div>
                </div>

                {/* Card Details - Only show when card is selected */}
                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-leica-black mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-leica-black mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-leica-black mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-leica-black">Save my information for next time</span>
                  </label>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Order Summary */}
            <AnimatedWrapper animation="slideUp" delay={0.4}>
              <div className="bg-leica-gray-light p-8 rounded-lg">
                <h2 className="text-2xl font-light text-leica-black mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 mr-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-leica-black font-medium">{item.name}</p>
                          <p className="text-leica-gray-dark text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-leica-black">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-leica-gray pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-leica-black">Subtotal</span>
                    <span className="text-leica-black">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leica-black">Shipping</span>
                    <span className="text-leica-black">$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leica-black">Tax</span>
                    <span className="text-leica-black">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-medium pt-4 border-t border-leica-gray">
                    <span className="text-leica-black">Total</span>
                    <span className="text-leica-black">${(getTotalPrice() + 10 + getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-8"
                  onClick={handleSubmit}
                >
                  Complete Purchase
                </Button>

                <div className="mt-4 text-center">
                  <Link href="/products" className="text-vital-green hover:text-vital-green-hover text-sm">
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-xs text-leica-gray-dark text-center">
                    <strong>Secure Checkout:</strong> Your payment information is encrypted and secure. We accept all major credit cards, Apple Pay, Google Pay, and PayPal.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}