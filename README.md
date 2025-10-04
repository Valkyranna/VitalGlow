# Vital Glow Wellness Website

## Overview
This project aims to create an exact carbon copy of the Leica website (https://leica-camera.com/en-GB) for Vital Glow Wellness, a premium wellness brand. The website will feature the same design patterns, interactions, and e-commerce functionality but with Vital Glow's branding and wellness products.

## Technical Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context for cart functionality
- **Images**: Next.js Image optimization
- **Icons**: Custom SVG icons matching Leica's style
- **Animations**: Framer Motion for micro-interactions

## Design System

### Color Palette
Based on Leica's design but adapted for Vital Glow:
- **Primary Background**: #FFFFFF (white)
- **Text**: #000000 (black)
- **Subtle Gray**: #F5F5F5, #E5E5E5, #D1D1D1
- **Accent Color**: #7FB069 (soft green - replacing Leica's red)
- **Hover States**: Slight variations of primary colors

### Typography
Matching Leica's typographic hierarchy:
- **Headings**: Custom serif font (similar to Leica's)
- **Body Text**: Sans-serif font (similar to Leica's)
- **Font Sizes**: Exact matching of Leica's scale
- **Line Height**: 1.4-1.6 depending on element
- **Letter Spacing**: Tight tracking for headlines, normal for body

### Spacing System
Based on Leica's spacing:
- **Base Unit**: 8px
- **Margins/Padding**: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Section Spacing**: 96px vertical between sections
- **Component Spacing**: Consistent 24px between elements

## Website Structure

### Homepage
1. **Sticky Navigation Header**
   - Logo left, navigation center, cart/account right
   - Hover states and scroll behavior
   - Mobile hamburger menu

2. **Hero Section**
   - Full-screen hero image
   - Text overlay with product name
   - Call-to-action button
   - Image carousel or static hero

3. **Product Showcase**
   - Grid layout matching Leica's product grid
   - Product cards with hover effects
   - "Shop Now" buttons

4. **Featured Categories**
   - Category cards with images
   - Hover animations

5. **Newsletter Signup**
   - Minimal form design
   - Same styling as Leica's

### Product Detail Page
1. **Product Image Gallery**
   - Large primary image
   - Thumbnail gallery
   - Zoom functionality
   - Image transitions

2. **Product Information**
   - Product name
   - Price display
   - Description
   - Ingredients/Details tabs
   - Quantity selector
   - Add to Cart button

3. **Related Products**
   - Horizontal carousel
   - Same card style as homepage

## Project Structure
```
vita-glow/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── hero/
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── products/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Product detail page
│   │   │   └── layout.tsx            # Root layout
│   │   ├── globals.css
│   │   └── layout.tsx                # App layout
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── Image.tsx
│   │   │   └── Typography.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ImageGallery.tsx
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── AddToCart.tsx
│   │   └── home/
│   │       ├── Hero.tsx
│   │       ├── ProductShowcase.tsx
│   │       └── Newsletter.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── products.ts
│   └── utils/
│       ├── spacing.ts
│       ├── typography.ts
│       └── animations.ts
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Component Architecture

### Base UI Components

#### Button Component
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Variants matching Leica's button styles:
// Primary: Black background, white text
// Secondary: White background, black text, border
// Outline: Transparent, black text, border
```

#### Grid System
```typescript
// components/ui/Grid.tsx
interface GridProps {
  cols: 1 | 2 | 3 | 4;
  gap: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Matching Leica's grid system with exact spacing
```

### Layout Components

#### Header/Navigation
```typescript
// components/layout/Header.tsx
// Sticky navigation with:
// - Logo on left
// - Navigation center (Shop, Products, About)
// - Cart/Account icons on right
// - Mobile hamburger menu
// - Scroll behavior (background change on scroll)
// - Hover states and transitions
```

#### Product Components
```typescript
// components/product/ProductCard.tsx
// Product card with:
// - Image with hover effect
// - Product name
// - Price
// - Hover overlay with "View Product" button
// - Exact dimensions matching Leica's cards

// components/product/ImageGallery.tsx
// Gallery with:
// - Large main image
// - Thumbnail strip
// - Zoom on click/hover
// - Smooth transitions
```

## State Management

### Cart Context
```typescript
// context/CartContext.tsx
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
```

## Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vital-green': '#7FB069',
        'vital-green-hover': '#6FA059',
        'leica-black': '#000000',
        'leica-gray-light': '#F5F5F5',
        'leica-gray': '#E5E5E5',
        'leica-gray-dark': '#D1D1D1',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
```

## Animation System

### Micro-interactions
```typescript
// utils/animations.ts
export const animations = {
  // Button hover: Subtle scale and shadow
  buttonHover: 'transform scale-105 shadow-lg transition-all duration-200',
  
  // Card hover: Image zoom and overlay
  cardHover: 'transform scale-105 transition-transform duration-300',
  
  // Image gallery: Smooth fade transitions
  imageTransition: 'opacity-0 transition-opacity duration-300',
  
  // Cart drawer: Slide from right
  drawerSlide: 'translate-x-full transition-transform duration-300',
  
  // Navigation: Background fade on scroll
  navScroll: 'bg-opacity-0 backdrop-blur-none transition-all duration-200',
}
```

## Sample Products (5)

1. **Vital Glow Serum**
   - Premium facial serum
   - $89.00
   - Anti-aging, hydrating

2. **Wellness Tea Collection**
   - Organic herbal teas
   - $45.00
   - Relaxation, detox

3. **Mindfulness Journal**
   - Guided wellness journal
   - $35.00
   - Mental health, self-care

4. **Recovery Bath Soak**
   - Luxury bath salts
   - $55.00
   - Muscle recovery, relaxation

5. **Daily Wellness Supplements**
   - Multivitamin complex
   - $65.00
   - Energy, immunity

## Implementation Phases

### Phase 1: Foundation
1. Set up Next.js with TypeScript
2. Configure Tailwind CSS
3. Create layout grid system
4. Implement basic components

### Phase 2: Homepage
1. Build navigation header
2. Create hero section
3. Implement product showcase
4. Add newsletter signup

### Phase 3: Product Pages
1. Create product detail layout
2. Implement image gallery
3. Add product information display
4. Create related products section

### Phase 4: Cart & Interactions
1. Implement cart drawer UI
2. Add to cart functionality
3. Micro-interactions and animations
4. Mobile responsiveness

### Phase 5: Polish & Testing
1. Cross-browser testing
2. Performance optimization
3. Visual QA against Leica site
4. Final documentation

## Responsive Design
- **Desktop**: 1440px+ - Full layout
- **Tablet**: 768px-1439px - Adjusted grid and spacing
- **Mobile**: <768px - Single column, stacked elements

### Breakpoints
```javascript
// Matching Leica's responsive behavior
breakpoints: {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
}
```

## Performance Optimizations

### Image Optimization
- Next.js Image component with proper sizing
- Lazy loading for below-fold images
- WebP format support
- Responsive image sources

### Code Splitting
- Dynamic imports for non-critical components
- Route-based code splitting
- Component-level lazy loading

### Bundle Optimization
- Tree shaking for unused code
- Minification of CSS and JS
- Font optimization (subset, display: swap)

## Success Criteria
- Pixel-perfect replication of Leica's design patterns
- Smooth interactions and animations
- Fully responsive across all devices
- Clean, maintainable code
- Performance scores matching Leica's site