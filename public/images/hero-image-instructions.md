# AVIF Image Placeholder

Since we can't directly create an AVIF file in this environment, you'll need to add the following image files:

1. `/public/images/hero-bg.avif` - Primary image in AVIF format
2. `/public/images/hero-bg.webp` - Fallback in WebP format  
3. `/public/images/hero-bg.jpg` - Final fallback in JPG format

Recommended hero image characteristics:
- Resolution: 1920×1080 or higher
- Dark/blue toned to work with overlay
- Abstract or tech-related imagery
- Preferably with some depth or bokeh for the glassmorphism effect

You can use a background processing tool like Sharp to convert your images:

```bash
npm install sharp
```

Then use this script to generate the optimized versions:

```javascript
const sharp = require('sharp');

// Convert original image to AVIF
sharp('original-hero.jpg')
  .resize(1920, 1080)
  .avif({ quality: 80 })
  .toFile('public/images/hero-bg.avif');

// Create WebP fallback
sharp('original-hero.jpg')
  .resize(1920, 1080)
  .webp({ quality: 85 })
  .toFile('public/images/hero-bg.webp');

// Create optimized JPG fallback
sharp('original-hero.jpg')
  .resize(1920, 1080)
  .jpeg({ quality: 85, progressive: true })
  .toFile('public/images/hero-bg.jpg');
```

This will ensure you have the most optimized versions of your hero background image.
