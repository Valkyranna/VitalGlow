'use client';

import React, { useState } from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    category: 'Products',
    questions: [
      {
        question: 'Are your products organic and natural?',
        answer: 'Yes, we prioritize organic and natural ingredients in all our formulations. Our products are free from harmful chemicals, parabens, and synthetic fragrances. We work with certified suppliers to ensure the highest quality ingredients.'
      },
      {
        question: 'Are your products tested on animals?',
        answer: 'Never. Vital Glow Wellness is committed to being cruelty-free. We do not test our products on animals, and we only work with suppliers who share our values.'
      },
      {
        question: 'How long will it take to see results?',
        answer: 'Results vary depending on the product and individual. Some customers notice improvements within a few days, while others may need 2-4 weeks of consistent use. We recommend following the product instructions consistently for best results.'
      },
      {
        question: 'Can I use multiple products together?',
        answer: 'Yes, our products are designed to work synergistically. However, we recommend introducing new products one at a time to monitor how your skin and body respond.'
      }
    ]
  },
  {
    category: 'Orders & Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping typically takes 5-7 business days within the US. Express shipping (2-3 business days) and overnight options are also available. International shipping times vary by location.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. You can check specific rates at checkout.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account on our website.'
      },
      {
        question: 'What if my order arrives damaged?',
        answer: 'We\'re sorry to hear that! Please contact us within 48 hours of receiving your order with photos of the damage, and we\'ll arrange for a replacement or refund immediately.'
      }
    ]
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange.'
      },
      {
        question: 'How do I initiate a return?',
        answer: 'To initiate a return, please contact our customer service team at support@vitalglow.com with your order number. We\'ll provide you with a return shipping label and instructions.'
      },
      {
        question: 'Are there any items that cannot be returned?',
        answer: 'Due to hygiene reasons, opened skincare products and supplements cannot be returned unless they arrive damaged or defective. However, we stand behind our quality and will address any issues promptly.'
      }
    ]
  },
  {
    category: 'Payment & Security',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and PayPal. All transactions are secure and encrypted.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers.'
      },
      {
        question: 'Can I pay in installments?',
        answer: 'We currently offer PayPal Credit and are working to add more installment payment options. Check back soon for updates on payment plans.'
      }
    ]
  },
  {
    category: 'Account & Privacy',
    questions: [
      {
        question: 'Do I need an account to make a purchase?',
        answer: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and access exclusive content.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you instructions to reset your password.'
      },
      {
        question: 'How do you protect my privacy?',
        answer: 'We take your privacy seriously and never sell or share your personal information. Please review our Privacy Policy for detailed information about how we protect and use your data.'
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Products');
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
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
              Frequently Asked Questions
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              Find answers to common questions about our products, orders, and policies.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <AnimatedWrapper animation="fadeIn" delay={0.3}>
            <div className="flex flex-wrap justify-center mb-12">
              {faqData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-3 mx-2 mb-4 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeCategory === category.category
                      ? 'text-vital-green border-b-2 border-vital-green'
                      : 'text-leica-gray-dark hover:text-leica-black'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Questions and Answers */}
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <div className="space-y-4">
              {faqData
                .find(cat => cat.category === activeCategory)
                ?.questions.map((item, index) => (
                  <div
                    key={index}
                    className="border border-leica-gray rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(item.question)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-leica-gray-light transition-colors duration-200"
                    >
                      <span className="text-leica-black font-medium">{item.question}</span>
                      {openQuestions[item.question] ? (
                        <ChevronUp className="text-vital-green" size={20} />
                      ) : (
                        <ChevronDown className="text-vital-green" size={20} />
                      )}
                    </button>
                    {openQuestions[item.question] && (
                      <div className="px-6 py-4 bg-leica-gray-light border-t border-leica-gray">
                        <p className="text-leica-gray-dark leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </AnimatedWrapper>

          {/* Contact Section */}
          <AnimatedWrapper animation="fadeIn" delay={0.5}>
            <div className="mt-16 text-center bg-leica-gray-light p-12 rounded-lg">
              <h2 className="leica-section-title mb-4">Still Have Questions?</h2>
              <p className="text-lg text-leica-gray-dark mb-8">
                Can't find the answer you're looking for? Our customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block">
                  <button className="bg-vital-green text-white px-8 py-3 tracking-wide text-sm font-medium hover:bg-vital-green-hover transition-colors duration-200">
                    Contact Us
                  </button>
                </a>
                <a href="mailto:support@vitalglow.com" className="inline-block">
                  <button className="bg-white text-leica-black border border-leica-black px-8 py-3 tracking-wide text-sm font-medium hover:bg-leica-black hover:text-white transition-colors duration-200">
                    Email Support
                  </button>
                </a>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}