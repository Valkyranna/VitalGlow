'use client';

import React, { useState } from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import Button from '@/components/ui/Button';
import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface ShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface TimelineEvent {
  date: string;
  status: string;
  description: string;
  completed: boolean;
}

interface OrderData {
  orderNumber: string;
  status: string;
  estimatedDelivery: string;
  trackingNumber: string;
  carrier: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  timeline: TimelineEvent[];
}

// Mock order data - in a real app, this would come from an API
const mockOrderData: OrderData = {
  orderNumber: 'VGW-2024-12345',
  status: 'in-transit',
  estimatedDelivery: '2024-01-15',
  trackingNumber: '1Z999AA10123456784',
  carrier: 'FedEx',
  items: [
    {
      id: 1,
      name: 'Vital Glow Serum',
      quantity: 2,
      price: 89.00,
      image: '/images/products/vital-glow-serum-main.jpg'
    },
    {
      id: 2,
      name: 'Wellness Tea Collection',
      quantity: 1,
      price: 45.00,
      image: '/images/products/wellness-tea-collection-main.jpg'
    }
  ],
  shippingAddress: {
    name: 'John Doe',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  timeline: [
    {
      date: '2024-01-10 14:30',
      status: 'Order Placed',
      description: 'Your order has been successfully placed',
      completed: true
    },
    {
      date: '2024-01-11 09:15',
      status: 'Processing',
      description: 'Your order is being prepared for shipment',
      completed: true
    },
    {
      date: '2024-01-12 16:45',
      status: 'Shipped',
      description: 'Your order has been shipped',
      completed: true
    },
    {
      date: '2024-01-13 10:20',
      status: 'In Transit',
      description: 'Your package is on its way',
      completed: true
    },
    {
      date: 'Estimated',
      status: 'Delivered',
      description: 'Your package will be delivered',
      completed: false
    }
  ]
};

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (orderNumber === 'VGW-2024-12345' && email) {
        setOrderData(mockOrderData);
      } else {
        setError('Order not found. Please check your order number and email address.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) return <Clock className="w-6 h-6 text-leica-gray-dark" />;
    
    switch (status) {
      case 'Order Placed':
        return <Package className="w-6 h-6 text-vital-green" />;
      case 'Processing':
        return <Package className="w-6 h-6 text-vital-green" />;
      case 'Shipped':
        return <Truck className="w-6 h-6 text-vital-green" />;
      case 'In Transit':
        return <Truck className="w-6 h-6 text-vital-green" />;
      case 'Delivered':
        return <CheckCircle className="w-6 h-6 text-vital-green" />;
      default:
        return <Clock className="w-6 h-6 text-leica-gray-dark" />;
    }
  };

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
              Track Your Order
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              Stay updated on your order status and estimated delivery time.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          {!orderData ? (
            <AnimatedWrapper animation="slideUp" delay={0.3}>
              <div className="max-w-md mx-auto bg-leica-gray-light p-8 rounded-lg">
                <h2 className="text-2xl font-light text-leica-black mb-6 text-center">
                  Enter Your Order Details
                </h2>
                <form onSubmit={handleTrackOrder} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">
                      Order Number
                    </label>
                    <input
                      type="text"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="e.g., VGW-2024-12345"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="your@email.com"
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm text-center">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Tracking...' : 'Track Order'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-leica-gray-dark mb-2">
                    Demo order: VGW-2024-12345
                  </p>
                  <p className="text-xs text-leica-gray-dark">
                    Enter any email address with the demo order number to see tracking details.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          ) : (
            <AnimatedWrapper animation="fadeIn" delay={0.3}>
              {/* Order Overview */}
              <div className="bg-leica-gray-light p-8 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-light text-leica-black mb-2">
                      Order #{orderData.orderNumber}
                    </h2>
                    <p className="text-leica-gray-dark">
                      Tracking Number: {orderData.trackingNumber}
                    </p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-sm text-leica-gray-dark mb-1">Carrier</p>
                    <p className="text-leica-black font-medium">{orderData.carrier}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-leica-gray-dark mb-1">Estimated Delivery</p>
                      <p className="text-leica-black font-medium">{orderData.estimatedDelivery}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vital-green text-white">
                        {orderData.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-light text-leica-black mb-6">Order Timeline</h3>
                <div className="space-y-4">
                  {orderData.timeline.map((event: TimelineEvent, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {getStatusIcon(event.status, event.completed)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <p className="text-leica-black font-medium">{event.status}</p>
                          <p className="text-sm text-leica-gray-dark">{event.date}</p>
                        </div>
                        <p className="text-leica-gray-dark mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-8">
                <h3 className="text-xl font-light text-leica-black mb-6">Order Items</h3>
                <div className="bg-white border border-leica-gray rounded-lg overflow-hidden">
                  {orderData.items.map((item: OrderItem) => (
                    <div key={item.id} className="flex items-center p-4 border-b border-leica-gray last:border-b-0">
                      <div className="w-16 h-16 bg-leica-gray-light rounded-lg overflow-hidden mr-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-leica-black font-medium">{item.name}</p>
                        <p className="text-leica-gray-dark text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-leica-black font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h3 className="text-xl font-light text-leica-black mb-6">Shipping Address</h3>
                <div className="bg-white border border-leica-gray rounded-lg p-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-vital-green mr-3 mt-1" />
                    <div>
                      <p className="text-leica-black font-medium">{orderData.shippingAddress.name}</p>
                      <p className="text-leica-gray-dark">
                        {orderData.shippingAddress.street}<br />
                        {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}<br />
                        {orderData.shippingAddress.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setOrderData(null);
                    setOrderNumber('');
                    setEmail('');
                  }}
                >
                  Track Another Order
                </Button>
              </div>
            </AnimatedWrapper>
          )}
        </div>
      </section>
    </div>
  );
}