const { chromium } = require('playwright');

async function analyzeLeicaWebsite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to Leica website
  await page.goto('https://leica-camera.com/en-GB');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Extract navigation structure
  const navigation = await page.evaluate(() => {
    const nav = document.querySelector('header nav');
    if (!nav) return null;
    
    const links = Array.from(nav.querySelectorAll('a')).map(link => ({
      text: link.textContent.trim(),
      href: link.href,
      className: link.className
    }));
    
    return {
      structure: nav.outerHTML,
      links: links
    };
  });
  
  // Extract hero section
  const hero = await page.evaluate(() => {
    const heroSection = document.querySelector('section[class*="hero"], div[class*="hero"], .hero');
    if (!heroSection) return null;
    
    return {
      structure: heroSection.outerHTML,
      styles: window.getComputedStyle(heroSection).cssText
    };
  });
  
  // Extract product grid
  const productGrid = await page.evaluate(() => {
    const grid = document.querySelector('[class*="grid"], [class*="product"], [class*="items"]');
    if (!grid) return null;
    
    const products = Array.from(grid.querySelectorAll('[class*="product"], [class*="item"], [class*="card"]')).map(product => ({
      structure: product.outerHTML,
      styles: window.getComputedStyle(product).cssText
    }));
    
    return {
      structure: grid.outerHTML,
      styles: window.getComputedStyle(grid).cssText,
      products: products
    };
  });
  
  // Extract color scheme
  const colors = await page.evaluate(() => {
    const computedStyle = window.getComputedStyle(document.body);
    const rootStyle = window.getComputedStyle(document.documentElement);
    
    return {
      body: {
        backgroundColor: computedStyle.backgroundColor,
        color: computedStyle.color
      },
      root: {
        backgroundColor: rootStyle.backgroundColor,
        color: rootStyle.color
      }
    };
  });
  
  // Extract typography
  const typography = await page.evaluate(() => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const typographyData = {};
    
    headings.forEach(tag => {
      const element = document.querySelector(tag);
      if (element) {
        const style = window.getComputedStyle(element);
        typographyData[tag] = {
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing
        };
      }
    });
    
    return typographyData;
  });
  
  // Take screenshots
  await page.screenshot({ path: 'leica-homepage.png', fullPage: true });
  
  // Save analysis data
  const analysis = {
    navigation,
    hero,
    productGrid,
    colors,
    typography,
    timestamp: new Date().toISOString()
  };
  
  require('fs').writeFileSync('leica-analysis.json', JSON.stringify(analysis, null, 2));
  
  await browser.close();
  console.log('Leica website analysis complete!');
  console.log('Data saved to leica-analysis.json');
  console.log('Screenshot saved to leica-homepage.png');
}

analyzeLeicaWebsite().catch(console.error);