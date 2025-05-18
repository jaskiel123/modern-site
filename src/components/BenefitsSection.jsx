import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  "Automatyczne follow-upy i leady – więcej klientów bez dodatkowego etatu",
  "Jedno kliknięcie = gotowa faktura i zestawienie sprzedaży",
  "Łatwa integracja z Twoim CRM, ERP i Google Workspace",
  "Bank-grade security & pełna zgodność GDPR / ISO 27001",
  "Średni ROI 1-3 mies. potwierdzony u klientów"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      <div aria-hidden="true" className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary-100/30 dark:bg-primary-800/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-secondary-100/30 dark:bg-secondary-800/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-8">
              Kluczowe korzyści dla Twojej firmy
            </h2>
            
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <div className="h-6 w-6 min-w-6 rounded mr-4 bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary-700 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[clamp(1rem,0.5vw+0.9rem,1.2rem)] text-neutral-700 dark:text-neutral-200">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="rounded-xl overflow-hidden shadow-elevation-3 border border-neutral-100 dark:border-neutral-700">
              <picture>
                <source srcset="/images/benefits.avif" type="image/avif" />
                <source srcset="/images/benefits.webp" type="image/webp" />
                <img 
                  src="/images/benefits.jpg" 
                  alt="Benefits of AutoAI" 
                  className="w-full h-auto object-cover object-center"
                  loading="lazy"
                />
              </picture>
            </div>
          </motion.div>
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

export { BenefitsSection };