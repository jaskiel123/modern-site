# AutoAI Landing Page

Modern SaaS landing page for AutoAI Systems, built with Astro, React, and Tailwind CSS.

## Features

- ⚡️ High-performance Astro framework
- 🎨 Modern design with glassmorphism effects
- 📱 Fully responsive for all devices
- 🔍 SEO optimized
- 🌗 Dark mode support
- ♿️ Accessibility features
- 🚀 Optimized images with AVIF/WebP
- 🎭 Subtle animations with reduced motion support

## 2025 SaaS Design System

The landing page implements a cohesive design system with the following features:

### Fluid Typography
All text elements use `clamp()` for responsive sizing that scales smoothly between viewport sizes:
```css
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
}
```

### Glassmorphism
Backdrop blur effects with semi-transparent backgrounds create a modern "frosted glass" effect:
```css
.glass-card {
  backdrop-blur-sm; 
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
}
```

### Design Tokens
Consistent color palette with primary/secondary colors and neutral shades:
- Primary: `#5C55FF` (purple)
- Secondary: `#FFA800` (orange)
- Neutrals: Various shades from 50-950

### Dark Mode
Automatic dark mode detection with prefixed variants for all components:
```jsx
className="bg-white dark:bg-neutral-800"
```

### Micro-Interactions
Subtle hover animations and transitions to enhance user experience:
```css
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
```

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/jaskiel123/modern-saas-2025.git
cd modern-saas-2025
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Building for Production

To build the site for production:

```bash
npm run build
```

This will generate a static site in the `dist` directory.

## Deployment

The site is configured for deployment to Vercel. The project has been already deployed to:
https://modern-saas-2025.vercel.app/

### Deploying to Vercel

1. Push changes to your GitHub repository
2. Vercel will automatically deploy from the connected repository

### One-Click Deployment

For a simplified deployment process:

1. Run the included script:
```bash
./one-click-deploy.bat
```

2. Follow the prompts to authenticate with Vercel

## Project Structure

```
/
├── public/
│   └── images/     # Optimized images in multiple formats
├── src/
│   ├── components/ # React and Astro components
│   │   ├── AuditFormSection.jsx  # Multi-step form component
│   │   ├── FAQSection.jsx        # FAQ accordions
│   │   ├── FeatureCard.jsx       # Animated feature card
│   │   ├── FeaturesSection.jsx   # Features grid
│   │   ├── Footer.astro          # Site footer
│   │   ├── HeroSection.astro     # Hero with glassmorphism
│   │   ├── PricingSection.jsx    # Pricing plans
│   │   └── TestimonialsSection.jsx # Client testimonials
│   ├── pages/      # Page components
│   │   └── index.astro   # Main landing page
│   └── styles/     # Global styles
│       └── global.css    # Global CSS and design tokens
├── astro.config.mjs # Astro configuration
├── tailwind.config.cjs # Tailwind configuration with design tokens
└── package.json
```

## Image Optimization

Hero and testimonial images should be provided in three formats:
- .jpg (fallback)
- .webp (modern browsers)
- .avif (best compression for supported browsers)

Use the following commands to convert images:

```bash
# For hero image
npx sharp-cli input.jpg -o public/images/hero-bg.jpg
npx sharp-cli input.jpg -o public/images/hero-bg.webp --webp
npx sharp-cli input.jpg -o public/images/hero-bg.avif --avif
```

## License

This project is proprietary and confidential.

## Contact

For any questions or support, please contact:
[contact@autoai-systems.com]