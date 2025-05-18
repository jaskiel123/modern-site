import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "60-sek. ankieta",
    description: "Odpowiadasz na kilka pytań o firmie i procesach."
  },
  {
    number: 2,
    title: "Widełki & ROI w 2 h",
    description: "Dostajesz estymację oszczędności i inwestycji."
  },
  {
    number: 3,
    title: "30-min discovery call",
    description: "Ustalamy detale, a automatyzacja startuje ≤ 14 dni."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      <div aria-hidden="true" className="absolute -top-20 left-40 w-72 h-72 rounded-full bg-primary-100/30 dark:bg-primary-800/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary-100/30 dark:bg-secondary-800/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
            Jak to działa — 3 proste kroki
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-8 rounded-xl shadow-elevation-2 border border-neutral-100/80 dark:border-neutral-700/80 flex flex-col text-center"
            >
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white text-xl font-bold mb-6">
                {step.number}
              </div>
              
              <h3 className="text-[clamp(1.25rem,1vw+1rem,1.5rem)] font-semibold text-primary-700 dark:text-primary-300 mb-4">
                {step.title}
              </h3>
              
              <p className="text-[clamp(0.95rem,0.5vw+0.8rem,1.1rem)] text-neutral-600 dark:text-neutral-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .bg-noise {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=');
          background-repeat: repeat;
        }
      `}</style>
    </section>
  );
};

export { HowItWorksSection };