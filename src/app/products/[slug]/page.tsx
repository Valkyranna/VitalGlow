import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import AddToCart from '@/components/cart/AddToCart';
import ProductCard from '@/components/product/ProductCard';
import Grid from '@/components/ui/Grid';
import CartDrawer from '@/components/cart/CartDrawer';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <CartDrawer />
      <main className="pt-20">
        {/* Product Details */}
        <section className="section-padding">
            <div className="container-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Product Images */}
                <div>
                  <ImageGallery 
                    images={product.images} 
                    alt={product.name}
                  />
                </div>
                
                {/* Product Information */}
                <div className="space-y-6">
                  <div>
                    <div className="mb-2">
                      <span className="text-sm font-medium tracking-wider uppercase text-leica-gray-dark">
                        {product.category}
                      </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Author_Light'] text-leica-black mb-4">
                      {product.name}
                    </h1>
                    
                    <p className="text-2xl font-medium text-leica-black mb-6">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-leica-gray-dark leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  {product.benefits && (
                    <div>
                      <h3 className="text-lg font-serif font-medium text-leica-black mb-3">
                        Key Benefits
                      </h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-vital-green mt-1">✓</span>
                            <span className="text-leica-gray-dark">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.ingredients && (
                    <div>
                      <h3 className="text-lg font-serif font-medium text-leica-black mb-3">
                        Ingredients
                      </h3>
                      <p className="text-leica-gray-dark">{product.ingredients}</p>
                    </div>
                  )}
                  
                  {product.usage && (
                    <div>
                      <h3 className="text-lg font-serif font-medium text-leica-black mb-3">
                        How to Use
                      </h3>
                      <p className="text-leica-gray-dark">{product.usage}</p>
                    </div>
                  )}
                  
                  <AddToCart product={product} />
                </div>
              </div>
            </div>
          </section>
          
          {/* Product Details Tabs */}
          <section className="section-padding bg-leica-gray-light">
            <div className="container-padding">
              <div className="max-w-4xl mx-auto">
                <div className="border-b border-leica-gray mb-8">
                  <nav className="flex space-x-8">
                    <button className="pb-4 border-b-2 border-vital-green text-vital-green font-medium">
                      Description
                    </button>
                    <button className="pb-4 border-b-2 border-transparent text-leica-gray-dark hover:text-leica-black transition-colors duration-200">
                      Ingredients
                    </button>
                    <button className="pb-4 border-b-2 border-transparent text-leica-gray-dark hover:text-leica-black transition-colors duration-200">
                      How to Use
                    </button>
                    <button className="pb-4 border-b-2 border-transparent text-leica-gray-dark hover:text-leica-black transition-colors duration-200">
                      Reviews
                    </button>
                  </nav>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-leica-gray-dark leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-leica-gray-dark leading-relaxed mt-4">
                    At Vital Glow Wellness, we believe in the power of natural ingredients to support your health and beauty journey. 
                    This product is carefully formulated with premium ingredients that work in harmony with your body's natural processes.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
        </main>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-leica-black mb-4">
                  You May Also Like
                </h2>
                <p className="text-lg text-leica-gray-dark max-w-2xl mx-auto">
                  Discover more products that complement your wellness routine
                </p>
              </div>
              
              <Grid cols={3} gap="lg">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard 
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </Grid>
            </div>
          </section>
        )}
      </div>
    );
}