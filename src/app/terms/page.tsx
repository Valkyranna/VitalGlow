import React from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slideUp" delay={0.4}>
            <p className="text-lg md:text-xl text-leica-gray-dark leading-relaxed max-w-2xl mx-auto font-light">
              Please read these terms and conditions carefully before using our website.
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
                  <h2 className="text-2xl font-light text-leica-black mb-4">1. Acceptance of Terms</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    By accessing and using Vital Glow Wellness's website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">2. Use License</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on Vital Glow Wellness's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-leica-gray-dark space-y-2 ml-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on Vital Glow Wellness's website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">3. Product Information</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on our website. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors.
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Your purchase of products through our website is subject to our Return Policy and these Terms & Conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">4. Pricing and Payment</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    All prices are displayed in [Currency] and are inclusive of applicable taxes unless otherwise stated. We reserve the right to change our prices at any time without further notice.
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Payment must be made in full before dispatch of the goods. We accept payment by credit card, debit card, PayPal, Apple Pay, and Google Pay.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">5. Shipping and Delivery</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Delivery times and costs are specified on our website and may vary depending on your location. We are not liable for any delays in shipment once the goods have left our premises. Risk of loss passes to you upon delivery to the carrier.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">6. Returns and Refunds</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Our return policy is outlined separately on our website. By purchasing from us, you agree to abide by the terms of our return policy. Please review our Shipping & Returns page for detailed information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">7. User Accounts</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer to prevent unauthorized access to your account. You agree to accept responsibility for all activities that occur under your account or password.
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">8. Intellectual Property</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    All content included on this site, such as text, graphics, logos, images, digital downloads, data compilations, and software, is the property of Vital Glow Wellness or its content suppliers and protected by international copyright laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">9. Limitation of Liability</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    In no event shall Vital Glow Wellness, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">10. Indemnification</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    You agree to indemnify and hold Vital Glow Wellness and its parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms & Conditions or the documents they incorporate by reference.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">11. Privacy Policy</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">12. Governing Law</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of [State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">13. Changes to Terms & Conditions</h2>
                  <p className="text-leica-gray-dark leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms & Conditions at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-leica-black mb-4">14. Contact Information</h2>
                  <p className="text-leica-gray-dark leading-relaxed mb-4">
                    Questions about the Terms & Conditions should be sent to us at:
                  </p>
                  <div className="bg-leica-gray-light p-6 rounded-lg">
                    <p className="text-leica-black mb-2">Vital Glow Wellness</p>
                    <p className="text-leica-gray-dark mb-2">Email: legal@vitalglow.com</p>
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