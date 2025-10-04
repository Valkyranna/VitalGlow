import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
          <Hero />
          <ProductShowcase />
          <Testimonials />
          
          {/* Additional sections can be added here */}
          <section className="section-padding bg-leica-gray-light">
            <div className="container-padding">
              <div className="text-center">
                <h2 className="leica-section-title">
                  Why Choose Vital Glow?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-vital-green rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="text-white text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-light text-leica-black mb-4">
                      Premium Quality
                    </h3>
                    <p className="text-leica-gray-dark font-light">
                      Carefully selected ingredients and formulations for optimal wellness benefits
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-vital-green rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="text-white text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-light text-leica-black mb-4">
                      Holistic Approach
                    </h3>
                    <p className="text-leica-gray-dark font-light">
                      Products designed to support your complete wellness journey
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-vital-green rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="text-white text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-light text-leica-black mb-4">
                      Expert Curated
                    </h3>
                    <p className="text-leica-gray-dark font-light">
                      Every product is selected by wellness experts for maximum effectiveness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}