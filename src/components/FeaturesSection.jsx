import React from 'react';
import FeatureCard from './FeatureCard';

const featuresData = [
  {
    title: "Built with Astro",
    description: "Lightning-fast performance with astro:assets image optimization.",
    icon: "🚀",
  },
  {
    title: "Styled with Tailwind CSS",
    description: "Modern utility-first CSS framework for rapid UI development.",
    icon: "🎨",
  },
  {
    title: "Optimized for performance",
    description: "Best practices for Core Web Vitals and lighthouse scores.",
    icon: "⚡",
  },
  {
    title: "Accessibility in mind",
    description: "WCAG 2.1 AA compliant with keyboard navigation support.",
    icon: "♿",
  },
];

export const FeaturesSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold text-primary-blue mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md"
            delay={index * 0.1} // Stagger the animations
          >
            <div className="flex items-start">
              <span className="text-2xl mr-4" aria-hidden="true">{feature.icon}</span>
              <div>
                <h3 className="font-medium text-lg text-secondary-blue mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
