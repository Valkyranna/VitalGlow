import React from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedWrapper animation="fadeIn" delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">1. Information We Collect</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    We collect several types of information from and about users of our website, including:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2 ml-4">
                    <li><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number</li>
                    <li><strong>Payment Information:</strong> Credit card details, PayPal information (processed securely by third-party payment processors)</li>
                    <li><strong>Account Information:</strong> Username, password (encrypted), order history</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, browser type</li>
                    <li><strong>Cookies and Tracking Data:</strong> Information collected through cookies and similar technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">2. How We Use Your Information</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2 ml-4">
                    <li>To process and fulfill your orders</li>
                    <li>To provide customer service and support</li>
                    <li>To communicate with you about orders, products, and promotions</li>
                    <li>To personalize your experience on our website</li>
                    <li>To improve our website, products, and services</li>
                    <li>To analyze website usage and trends</li>
                    <li>To detect and prevent fraud</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">3. Information Sharing</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2 ml-4">
                    <li><strong>Payment Processors:</strong> We share payment information with our payment processors to process transactions</li>
                    <li><strong>Shipping Partners:</strong> We share shipping information with our delivery partners to fulfill orders</li>
                    <li><strong>Service Providers:</strong> We may share information with third-party service providers who help us operate our website</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> Information may be transferred if we are acquired by or merged with another company</li>
                  </ul>
                  <p className="text-leica-gray-dark leading-relaxed mt-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Cookies we use include session cookies (which are deleted when you close your browser) and persistent cookies (which remain on your device until they expire or you delete them).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">5. Data Security</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL encryption for data transmission, secure servers for data storage, and restricted access to personal information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">6. Data Retention</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">7. Your Rights</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your personal information to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">8. Children's Privacy</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">9. International Data Transfers</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Your personal information may be transferred to, and maintained on, computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the bottom of this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">11. Contact Us</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    If you have any questions about this privacy policy, please contact us:
                  </p>
                  <div className="bg-leica-gray-light p-6 rounded-lg">
                    <p className="text-leica-black mb-2">Vital Glow Wellness</p>
                    <p className="text-leica-gray-dark mb-2">Email: privacy@vitalglow.com</p>
                    <p className="text-leica-gray-dark mb-2">Phone: +1 (234) 567-890</p>
                    <p className="text-leica-gray-dark">Address: 123 Wellness Avenue, New York, NY 10001</p>
                  </div>
                </div>

                <div>
                  <p className="text-leica-gray-dark leading-relaxed">
                    <strong>Effective Date:</strong> January 1, 2024
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    <strong>Last Updated:</strong> January 1, 2024
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}