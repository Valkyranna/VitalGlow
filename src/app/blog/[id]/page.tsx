import Link from 'next/link';
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
  relatedPosts: number[];
}

// Mock blog post data - in a real app, this would come from an API based on the ID
const getBlogPost = (id: string): BlogPost | null => {
  const posts: { [key: string]: BlogPost } = {
    "1": {
      id: 1,
      title: "The Science Behind Natural Skincare: Why It Works",
      author: "Dr. Sarah Johnson",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Skincare",
      image: "/images/blog/natural-skincare.jpg",
      content: `
        <h2>The Growing Evidence for Natural Skincare</h2>
        <p>In recent years, the skincare industry has seen a significant shift towards natural and organic ingredients. But what does science actually say about the effectiveness of these natural alternatives? Let's explore the evidence behind why natural skincare isn't just a trend, but a scientifically-backed approach to healthy skin.</p>
        
        <h3>Understanding Skin's Natural Barrier</h3>
        <p>Our skin is a remarkable organ with its own ecosystem. The stratum corneum, our outermost skin layer, maintains a delicate pH balance between 4.5 and 5.5. Many synthetic skincare products disrupt this balance, leading to irritation and long-term damage.</p>
        
        <p>Natural ingredients work synergistically with our skin's biology. For instance, hyaluronic acid derived from fermentation processes mimics our skin's natural moisturizing factors, providing hydration without disrupting the skin barrier.</p>
        
        <h3>Powerful Natural Ingredients and Their Benefits</h3>
        <p><strong>Vitamin C from Natural Sources:</strong> Unlike synthetic vitamin C, naturally-derived ascorbic acid from ingredients like rosehip and sea buckthorn contains additional phytonutrients that enhance absorption and provide antioxidant protection.</p>
        
        <p><strong>Plant-Based Retinol Alternatives:</strong> Bakuchiol, derived from the Psoralea corylifolia plant, has been shown in clinical studies to provide similar benefits to retinol without the irritation commonly associated with synthetic retinoids.</p>
        
        <p><strong>Natural Oils:</strong> Oils like jojoba, rosehip, and marula have molecular structures remarkably similar to our skin's natural sebum, allowing for deeper penetration and more effective nourishment.</p>
        
        <h3>The Environmental Impact</h3>
        <p>Beyond personal benefits, natural skincare products typically have a lower environmental impact. Biodegradable ingredients and sustainable sourcing practices mean your skincare routine doesn't harm the planet.</p>
        
        <h3>Making the Transition</h3>
        <p>When switching to natural skincare, patience is key. Your skin may need time to adjust as it rebalances itself. Start with one product at a time and introduce new items gradually to monitor how your skin responds.</p>
        
        <p>Remember, the most effective skincare routine is one that works with your body's natural processes, not against them. By choosing products with scientifically-backed natural ingredients, you're investing in both your skin's health and the planet's future.</p>
      `,
      relatedPosts: [2, 4, 5]
    },
    "2": {
      id: 2,
      title: "Mindful Morning Rituals for a Balanced Day",
      author: "Emma Williams",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Wellness",
      image: "/images/blog/morning-rituals.jpg",
      content: `
        <h2>The Power of Morning Intention</h2>
        <p>How we start our day sets the tone for everything that follows. In our fast-paced world, it's easy to jump straight into emails and notifications, but taking even 10 minutes for mindful morning practices can transform your entire day.</p>
        
        <h3>Creating Space for Stillness</h3>
        <p>Before the world demands your attention, create a pocket of stillness. This doesn't require hours of meditation – even five minutes of conscious breathing can reset your nervous system and clarify your mind.</p>
        
        <p>Try this simple breathing exercise: Inhale for four counts, hold for four, exhale for six, and hold for two. Repeat this cycle 10 times while focusing on the sensation of breath moving through your body.</p>
        
        <h3>Hydration with Intention</h3>
        <p>Instead of grabbing coffee first thing, start with warm water and lemon. This simple ritual awakens your digestive system gently while providing vitamin C and hydration. As you drink, set an intention for your day – how do you want to feel? What energy do you want to bring to your interactions?</p>
        
        <h3>Movement That Feels Good</h3>
        <p>Morning movement doesn't have to mean an intense workout. Gentle stretching, yoga, or even just walking around your home can increase circulation and energy levels. Listen to your body – some days you might need vigorous movement, other days gentle stretching is perfect.</p>
        
        <h3>Gratitude Practice</h3>
        <p>Before checking your phone, take a moment to name three things you're grateful for. This simple practice shifts your mindset from scarcity to abundance, setting a positive tone for the day ahead.</p>
        
        <h3>Mindful Consumption</h3>
        <p>Choose your morning information intake carefully. Instead of scrolling through news or social media immediately, consider reading something inspiring or listening to calming music. Protect your mental space during these precious morning hours.</p>
        
        <h3>Building Consistency</h3>
        <p>Start small – choose just one of these practices to begin with. Consistency matters more than intensity. As these rituals become natural parts of your morning, you can gradually add others that resonate with you.</p>
        
        <p>Remember, the goal isn't perfection but presence. Even on busy days, taking 30 seconds to breathe deeply before jumping into your tasks can make a significant difference in how you experience the hours that follow.</p>
      `,
      relatedPosts: [1, 3, 5]
    },
    "3": {
      id: 3,
      title: "Understanding Hormonal Balance: A Women's Health Guide",
      author: "Dr. Michael Chen",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Health",
      image: "/images/blog/hormonal-balance.jpg",
      content: `
        <h2>The Complex World of Hormones</h2>
        <p>Hormones are the chemical messengers that regulate nearly every process in our bodies. For women, hormonal balance plays a crucial role in everything from mood and energy to reproductive health and metabolism.</p>
        
        <h3>Key Hormones and Their Functions</h3>
        <p><strong>Estrogen:</strong> Often called the "female hormone," estrogen actually plays roles in bone health, heart health, and cognitive function. Imbalances can lead to mood swings, weight gain, and menstrual irregularities.</p>
        
        <p><strong>Progesterone:</strong> This hormone helps regulate the menstrual cycle and supports pregnancy. Low levels can contribute to anxiety, sleep disturbances, and heavy periods.</p>
        
        <p><strong>Cortisol:</strong> Known as the stress hormone, chronic elevation can disrupt other hormones and lead to weight gain, especially around the midsection.</p>
        
        <p><strong>Thyroid Hormones:</strong> These regulate metabolism, energy, and body temperature. Even subtle imbalances can significantly impact daily functioning.</p>
        
        <h3>Signs of Hormonal Imbalance</h3>
        <p>Watch for these common indicators: irregular menstrual cycles, unexplained weight changes, persistent fatigue, mood swings, sleep disturbances, skin issues like acne or dryness, and changes in libido.</p>
        
        <h3>Natural Approaches to Balance</h3>
        <p><strong>Nutrition:</strong> Focus on whole foods rich in phytoestrogens, healthy fats, and fiber. Foods like flaxseeds, fatty fish, and leafy greens support hormonal health.</p>
        
        <p><strong>Stress Management:</strong> Chronic stress elevates cortisol, which disrupts other hormones. Regular meditation, yoga, or even deep breathing can help regulate cortisol levels.</p>
        
        <p><strong>Sleep:</strong> Quality sleep is essential for hormonal regulation. Aim for 7-9 hours per night, maintaining consistent sleep and wake times.</p>
        
        <p><strong>Exercise:</strong> Moderate, regular exercise supports hormonal balance. However, excessive exercise can actually disrupt hormones, so find a sustainable routine.</p>
        
        <h3>When to Seek Professional Help</h3>
        <p>While lifestyle changes can significantly impact hormonal health, some imbalances require medical intervention. If you're experiencing severe symptoms or haven't found relief through natural approaches, consult with a healthcare provider who specializes in hormonal health.</p>
        
        <p>Remember, hormonal balance is a journey, not a destination. Small, consistent changes in lifestyle and self-care can lead to significant improvements over time.</p>
      `,
      relatedPosts: [1, 2, 4]
    },
    "4": {
      id: 4,
      title: "The Power of Herbal Teas: Ancient Wisdom for Modern Wellness",
      author: "Lisa Park",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Wellness",
      image: "/images/blog/herbal-teas.jpg",
      content: `
        <h2>Tea as Medicine</h2>
        <p>For thousands of years, cultures around the world have used herbal teas not just for enjoyment, but as powerful medicine. Today, modern science is validating what traditional healers have known all along – plants contain compounds that can support our health in remarkable ways.</p>
        
        <h3>Chamomile: The Gentle Calmer</h3>
        <p>Beyond its reputation as a sleep aid, chamomile contains apigenin, an antioxidant that binds to brain receptors promoting relaxation. Regular consumption can reduce anxiety, improve sleep quality, and even support digestive health.</p>
        
        <h3>Peppermint: Digestive Support</h3>
        <p>Peppermint tea contains menthol, which relaxes stomach muscles and improves bile flow. It's particularly effective for IBS symptoms, nausea, and indigestion. The cooling sensation also provides natural headache relief.</p>
        
        <h3>Ginger: The Universal Remedy</h3>
        <p>Ginger's anti-inflammatory properties make it a powerful ally for everything from menstrual cramps to arthritis. It's also excellent for nausea and immune support. Fresh ginger tea can be made by steeping sliced ginger root in hot water for 10-15 minutes.</p>
        
        <h3>Rooibos: The Antioxidant Powerhouse</h3>
        <p>South African rooibos tea is caffeine-free and packed with antioxidants like aspalathin. These compounds may help reduce stress hormones and protect against cellular damage. It's also rich in minerals like calcium and magnesium.</p>
        
        <h3>Making the Perfect Herbal Tea</h3>
        <p>The quality of your herbal tea depends on several factors: use fresh, high-quality herbs; water temperature matters (boiling for most herbs, slightly cooler for delicate ones like chamomile); and steeping time – generally 5-10 minutes for medicinal strength.</p>
        
        <h3>Creating Your Blends</h3>
        <p>Don't be afraid to experiment with combinations. Try peppermint and chamomile for evening relaxation, or ginger and lemon for morning wellness. Keep a journal of how different blends make you feel – your perfect mix might surprise you.</p>
        
        <h3>Quality Matters</h3>
        <p>Choose organic, sustainably sourced herbs whenever possible. The medicinal properties are strongest in fresh, properly stored herbs. Store your teas in airtight containers away from light and heat to preserve their beneficial compounds.</p>
        
        <p>Remember, herbal teas work best as part of a consistent wellness routine. While they can provide immediate relief for some symptoms, their greatest benefits come from regular, mindful consumption.</p>
      `,
      relatedPosts: [1, 2, 5]
    },
    "5": {
      id: 5,
      title: "Building a Sustainable Self-Care Practice",
      author: "Rachel Green",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "Self-Care",
      image: "/images/blog/self-care-practice.jpg",
      content: `
        <h2>Redefining Self-Care</h2>
        <p>In today's wellness culture, self-care often looks expensive and time-consuming: spa days, elaborate routines, expensive products. But true sustainable self-care is simpler, more personal, and much more powerful.</p>
        
        <h3>The Myth of Perfect Self-Care</h3>
        <p>Self-care isn't about achieving perfection – it's about consistently showing up for yourself in small ways. The most effective self-care practices are those you can maintain even on difficult days, not just when you have time and energy.</p>
        
        <h3>Identifying Your True Needs</h3>
        <p>Start by paying attention to what truly nourishes you. Do you feel better after quiet reflection or social connection? Does movement energize you or do you need stillness? Your self-care practice should honor your unique needs rather than following someone else's blueprint.</p>
        
        <h3>Creating Rituals, Not Rules</h3>
        <p>Transform self-care from a to-do list into meaningful rituals. Instead of "I must meditate for 10 minutes," try "I'll take 10 minutes to check in with myself." The intention behind the action matters more than the specific practice.</p>
        
        <h3>Starting Small</h3>
        <p>Choose one tiny practice to begin with. It could be drinking a glass of water when you wake up, taking three deep breaths before meals, or stretching for two minutes before bed. The key is making it so small you can't say no.</p>
        
        <h3>Adapting to Life's Seasons</h3>
        <p>Your self-care needs will change with seasons, life circumstances, and energy levels. What nourished you last year might not serve you now. Regularly check in with yourself and be willing to adjust your practices.</p>
        
        <h3>The Power of Consistency</h3>
        <p>Consistency trumps intensity every time. Five minutes of daily self-care is more beneficial than an occasional spa day. Small, regular practices compound over time, creating lasting change in your wellbeing.</p>
        
        <h3>Self-Compassion as Foundation</h3>
        <p>The most important element of sustainable self-care is self-compassion. Some days you'll miss your practice, and that's okay. The goal isn't perfection but kind consistency. Treat yourself with the same gentleness you'd offer a good friend.</p>
        
        <p>Remember, self-care isn't selfish – it's necessary. By consistently nourishing yourself, you build the resilience to show up fully for the people and causes that matter to you.</p>
      `,
      relatedPosts: [2, 3, 4]
    }
  };
  
  return posts[id] || null;
};

export async function generateStaticParams() {
  // Generate static pages for all blog posts
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-leica-black mb-4">Post Not Found</h1>
          <p className="text-leica-gray-dark mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-vital-green hover:text-vital-green-hover">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-leica-gray-light w-full h-full"></div>
        </div>
        <div className="absolute inset-0 bg-leica-black bg-opacity-20"></div>
      </section>

      {/* Content */}
      <article className="section-padding container-padding">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <AnimatedWrapper animation="fadeIn" delay={0.2}>
            <Link href="/blog" className="inline-flex items-center text-vital-green hover:text-vital-green-hover mb-8">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
          </AnimatedWrapper>

          {/* Article Header */}
          <AnimatedWrapper animation="slideUp" delay={0.3}>
            <div className="mb-8">
              <div className="flex items-center text-sm text-leica-gray-dark mb-4">
                <span className="bg-vital-green text-white px-3 py-1 rounded-full text-xs mr-4">
                  {post.category}
                </span>
                <span className="mr-4">{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light text-leica-black mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between border-b border-leica-gray pb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-leica-gray rounded-full mr-4"></div>
                  <div>
                    <p className="text-leica-black font-medium">{post.author}</p>
                    <p className="text-leica-gray-dark text-sm">Wellness Expert</p>
                  </div>
                </div>
                
                <button className="flex items-center text-leica-gray-dark hover:text-vital-green transition-colors duration-200">
                  <Share2 size={20} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Article Content */}
          <AnimatedWrapper animation="fadeIn" delay={0.4}>
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedWrapper>

          {/* Related Posts */}
          <AnimatedWrapper animation="slideUp" delay={0.5}>
            <div className="border-t border-leica-gray pt-12">
              <h2 className="leica-section-title mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {post.relatedPosts.map((relatedId: number) => {
                  const relatedPost = getBlogPost(relatedId.toString());
                  if (!relatedPost) return null;
                  
                  return (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <div className="group cursor-pointer">
                        <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                          <div className="bg-leica-gray w-full h-full"></div>
                          <div className="absolute inset-0 bg-leica-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>
                        <h3 className="text-lg font-light text-leica-black group-hover:text-vital-green transition-colors duration-200 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-leica-gray-dark text-sm">{relatedPost.readTime}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </article>
    </div>
  );
}