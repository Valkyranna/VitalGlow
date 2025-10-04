import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vital Glow Oil',
    slug: 'vital-glow-oil',
    price: 25.00,
    description: 'A premium facial oil formulated with natural ingredients to hydrate, nourish, and rejuvenate your skin. Our Vital Glow Oil contains a powerful blend of antioxidants, vitamins, and botanical extracts that work together to reduce fine lines, improve skin texture, and restore your natural radiance.',
    ingredients: 'Water, Hyaluronic Acid, Vitamin C, Green Tea Extract, Rosehip Oil, Jojoba Oil, Aloe Vera, Chamomile Extract',
    benefits: [
      'Deep hydration and moisture retention',
      'Reduces appearance of fine lines and wrinkles',
      'Improves skin elasticity and firmness',
      'Brightens and evens skin tone',
      'Protects against environmental damage'
    ],
    usage: 'Apply 2-3 drops to clean face and neck, gently patting into skin. Use morning and evening for best results.',
    category: 'Skincare',
    images: {
      main: '/images/products/vital-glow-oil-main.webp',
      gallery: [
        '/images/products/vital-glow-oil-main.webp',
        '/images/products/image1.webp',
        '/images/products/image2.webp'
      ]
    },
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Wellness Tea Collection',
    slug: 'wellness-tea-collection',
    price: 45.00,
    description: 'A curated selection of organic herbal teas designed to promote relaxation, detoxification, and overall wellness. Each blend is carefully crafted using premium organic herbs and botanicals to support your wellness journey.',
    ingredients: 'Organic herbs including chamomile, lavender, peppermint, ginger, turmeric, and lemon balm',
    benefits: [
      'Promotes relaxation and better sleep',
      'Supports natural detoxification',
      'Boosts immune system',
      'Reduces stress and anxiety',
      'Improves digestion'
    ],
    usage: 'Steep 1 tea bag in hot water for 5-7 minutes. Enjoy 1-3 cups daily.',
    category: 'Wellness',
    images: {
      main: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop'
      ]
    },
    featured: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Mindfulness Journal',
    slug: 'mindfulness-journal',
    price: 35.00,
    description: 'A beautifully designed guided journal to support your mental health and self-care practice. With thoughtful prompts and exercises, this journal helps you cultivate mindfulness, gratitude, and self-awareness in your daily life.',
    ingredients: '',
    benefits: [
      'Reduces stress and anxiety',
      'Improves self-awareness',
      'Promotes positive thinking',
      'Enhances emotional regulation',
      'Supports goal setting and achievement'
    ],
    usage: 'Write daily or as needed. Follow the guided prompts or use the blank pages for free expression.',
    category: 'Self-Care',
    images: {
      main: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1499803619857-2b972a180b1e?w=600&h=800&fit=crop'
      ]
    },
    featured: false,
    inStock: true
  },
  {
    id: '4',
    name: 'Recovery Bath Soak',
    slug: 'recovery-bath-soak',
    price: 55.00,
    description: 'A luxurious bath soak formulated with Epsom salts, essential oils, and botanical extracts to soothe sore muscles, reduce inflammation, and promote deep relaxation. Perfect for post-workout recovery or stress relief.',
    ingredients: 'Epsom Salt, Dead Sea Salt, Lavender Essential Oil, Eucalyptus Oil, Chamomile Extract, Arnica Flower',
    benefits: [
      'Relieves muscle soreness and tension',
      'Reduces inflammation and joint pain',
      'Promotes relaxation and better sleep',
      'Detoxifies the body',
      'Improves circulation'
    ],
    usage: 'Add 2-3 scoops to warm bath water. Soak for 20-30 minutes for optimal benefits.',
    category: 'Body Care',
    images: {
      main: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=800&fit=crop'
      ]
    },
    featured: true,
    inStock: true
  },
  {
    id: '5',
    name: 'Daily Wellness Supplements',
    slug: 'daily-wellness-supplements',
    price: 65.00,
    description: 'A comprehensive multivitamin complex formulated to support overall health, energy levels, and immune function. Our Daily Wellness Supplements contain essential vitamins, minerals, and antioxidants to fill nutritional gaps and promote optimal wellness.',
    ingredients: 'Vitamin A, C, D, E, B-Complex, Zinc, Magnesium, Iron, Selenium, CoQ10, Probiotics, Green Tea Extract',
    benefits: [
      'Boosts energy levels and vitality',
      'Supports immune system function',
      'Improves mental clarity and focus',
      'Promotes healthy skin, hair, and nails',
      'Fills nutritional gaps in diet'
    ],
    usage: 'Take 2 capsules daily with food, preferably in the morning.',
    category: 'Supplements',
    images: {
      main: 'https://images.unsplash.com/photo-1607619056574-db7219c79a7a?w=600&h=800&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1607619056574-db7219c79a7a?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551228746-739524be36ae?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop'
      ]
    },
    featured: false,
    inStock: true
  }
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = () => {
  return Array.from(new Set(products.map(product => product.category)));
};