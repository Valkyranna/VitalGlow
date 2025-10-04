'use client';

import React, { useState } from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              Contact Us
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              We're here to help you on your wellness journey. Reach out with any questions or feedback.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedWrapper animation="slideUp" delay={0.3}>
              <div>
                <h2 className="leica-section-title mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="Your name"
                    />
                  </div>

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

                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-leica-black mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-leica-gray focus:outline-none focus:border-vital-green"
                      placeholder="Tell us more about how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedWrapper>

            {/* Contact Information */}
            <AnimatedWrapper animation="slideUp" delay={0.4}>
              <div>
                <h2 className="leica-section-title mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-light text-leica-black mb-4">Customer Service</h3>
                    <p className="text-leica-gray-dark mb-2">
                      Email: <a href="mailto:support@vitalglow.com" className="text-vital-green hover:text-vital-green-hover">support@vitalglow.com</a>
                    </p>
                    <p className="text-leica-gray-dark mb-2">
                      Phone: <a href="tel:+1234567890" className="text-vital-green hover:text-vital-green-hover">+1 (234) 567-890</a>
                    </p>
                    <p className="text-leica-gray-dark">
                      Hours: Monday - Friday, 9am - 6pm EST
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-leica-black mb-4">Business Inquiries</h3>
                    <p className="text-leica-gray-dark mb-2">
                      Email: <a href="mailto:business@vitalglow.com" className="text-vital-green hover:text-vital-green-hover">business@vitalglow.com</a>
                    </p>
                    <p className="text-leica-gray-dark">
                      For partnerships, wholesale, and media inquiries
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-leica-black mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-leica-black hover:text-vital-green transition-colors duration-200">
                        Instagram
                      </a>
                      <a href="#" className="text-leica-black hover:text-vital-green transition-colors duration-200">
                        Facebook
                      </a>
                      <a href="#" className="text-leica-black hover:text-vital-green transition-colors duration-200">
                        Twitter
                      </a>
                      <a href="#" className="text-leica-black hover:text-vital-green transition-colors duration-200">
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-light text-leica-black mb-4">Visit Us</h3>
                    <p className="text-leica-gray-dark">
                      Vital Glow Wellness Headquarters<br />
                      123 Wellness Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* FAQ Link */}
          <AnimatedWrapper animation="fadeIn" delay={0.5}>
            <div className="mt-16 text-center bg-leica-gray-light p-12 rounded-lg">
              <h2 className="leica-section-title mb-4">Have a Question?</h2>
              <p className="text-lg text-leica-gray-dark mb-8">
                Check out our FAQ section for quick answers to common questions.
              </p>
              <Button variant="outline" size="lg">
                View FAQ
              </Button>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}