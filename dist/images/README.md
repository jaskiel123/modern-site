# Image Assets Required for the Landing Page

This directory should contain the following optimized images:

## Hero Section
- `hero-bg.jpg` - Default fallback image (1920x1080px)
- `hero-bg.webp` - WebP format for modern browsers
- `hero-bg.avif` - AVIF format for browsers with best compression support

## Testimonials Section
- `testimonial-1.jpg` - First testimonial author photo
- `testimonial-1.webp` - WebP version
- `testimonial-1.avif` - AVIF version

- `testimonial-2.jpg` - Second testimonial author photo
- `testimonial-2.webp` - WebP version
- `testimonial-2.avif` - AVIF version

- `testimonial-3.jpg` - Third testimonial author photo
- `testimonial-3.webp` - WebP version
- `testimonial-3.avif` - AVIF version

## Company Logos (for testimonials section)
- `logo-1.png` - First company logo
- `logo-2.png` - Second company logo
- `logo-3.png` - Third company logo
- `logo-4.png` - Fourth company logo
- `logo-5.png` - Fifth company logo

## SEO and Social Media
- `og-image.jpg` - Open Graph image for social media sharing (1200x630px)
- `favicon.ico` - Site favicon

## Instructions for Image Optimization
To generate the WebP and AVIF versions of images, you can use:

```bash
# For AVIF conversion
npx sharp-cli input.jpg -o output.avif --avif

# For WebP conversion
npx sharp-cli input.jpg -o output.webp --webp

# For resizing
npx sharp-cli input.jpg -o output.jpg --resize 1920 1080
```
