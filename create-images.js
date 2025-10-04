const fs = require('fs');
const path = require('path');

// Create directories
const heroDir = path.join('public', 'images', 'hero');
const productsDir = path.join('public', 'images', 'products');

if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Create a simple SVG placeholder
function createSVGPlaceholder(width, height, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f5f5f5"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="20" fill="#333">${text}</text>
  </svg>`;
}

// Create hero image
const heroSVG = createSVGPlaceholder(1920, 1080, 'Vital Glow Wellness Hero');
fs.writeFileSync(path.join(heroDir, 'wellness-hero.jpg'), heroSVG);

// Create product images
const products = [
  'vital-glow-serum',
  'wellness-tea-collection',
  'mindfulness-journal',
  'recovery-bath-soak',
  'daily-wellness-supplements'
];

products.forEach(product => {
  // Main image
  const mainSVG = createSVGPlaceholder(600, 800, product.replace(/-/g, ' ').toUpperCase());
  fs.writeFileSync(path.join(productsDir, `${product}-main.jpg`), mainSVG);
  
  // Gallery images
  for (let i = 1; i <= 3; i++) {
    const gallerySVG = createSVGPlaceholder(600, 800, `${product.replace(/-/g, ' ').toUpperCase()} ${i}`);
    fs.writeFileSync(path.join(productsDir, `${product}-${i}.jpg`), gallerySVG);
  }
});

console.log('Placeholder images created successfully!');