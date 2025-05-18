import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Idealny dla małych firm i freelancerów',
      priceMonthly: 499,
      priceAnnual: 399,
      currency: 'zł',
      period: '/mies.',
      features: [
        'Automatyzacja dokumentów (do 100/mies.)',
        'Asystent mailowy (1 skrzynka)',
        'Podstawowy przepływ danych',
        'Wsparcie e-mail',
        'Aktualizacje AI'
      ],
      cta: 'Rozpocznij za darmo',
      ctaLink: '#audit',
      featured: false
    },
    {
      name: 'Professional',
      description: 'Dla rozwijających się firm i zespołów',
      priceMonthly: 999,
      priceAnnual: 799,
      currency: 'zł',
      period: '/mies.',
      features: [
        'Automatyzacja dokumentów (do 500/mies.)',
        'Asystent mailowy (5 skrzynek)',
        'Zaawansowany przepływ danych',
        'Analiza rynku i konkurencji',
        'Dedykowane wsparcie',
        'Priorytetowe aktualizacje AI'
      ],
      cta: 'Wybierz ten plan',
      ctaLink: '#audit',
      featured: true
    },
    {
      name: 'Enterprise',
      description: 'Rozwiązanie dla średnich i dużych firm',
      priceMonthly: 2499,
      priceAnnual: 1999,
      currency: 'zł',
      period: '/mies.',
      features: [
        'Nieograniczona automatyzacja dokumentów',
        'Asystent mailowy (nielimitowane skrzynki)',
        'Zintegrowany przepływ danych',
        'Zaawansowana analityka biznesowa',
        'Dedykowany specjalista wdrożeniowy',
        'Niestandardowe integracje',
        'SLA 99.9% dostępności'
      ],
      cta: 'Skontaktuj się',
      ctaLink: '#contact',
      featured: false
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
      <div aria-hidden="true" className="absolute top-0 -right-40 w-96 h-96 rounded-full bg-primary-100/40 dark:bg-primary-900/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-secondary-200/30 dark:bg-secondary-900/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
            Przejrzyste Cenniki
          </h2>
          <p className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            Wybierz plan dopasowany do potrzeb Twojej firmy. Zapłać tylko za to, czego potrzebujesz.
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg mb-10 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-[clamp(0.875rem,0.3vw+0.8rem,1rem)] font-medium transition-all ${
                isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              Rocznie <span className="text-secondary-300 text-xs font-bold ml-1">-20%</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-[clamp(0.875rem,0.3vw+0.8rem,1rem)] font-medium transition-all ${
                !isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              Miesięcznie
            </button>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className={`rounded-xl overflow-hidden backdrop-blur-sm ${
                plan.featured 
                  ? 'border-2 border-primary shadow-lg shadow-primary/10 dark:shadow-primary/5 relative' 
                  : 'border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center text-sm font-medium py-1">
                  Polecany
                </div>
              )}
              
              <div className={`p-8 ${plan.featured ? 'pt-10' : ''} bg-white/90 dark:bg-neutral-800/90`}>
                <h3 className="text-[clamp(1.2rem,1vw+1rem,1.5rem)] font-bold text-neutral-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-[clamp(0.875rem,0.3vw+0.8rem,1rem)] mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-neutral-500 dark:text-neutral-400 text-lg">{plan.currency}</span>
                    <span className="text-[clamp(2rem,2vw+1.5rem,2.5rem)] font-bold text-neutral-800 dark:text-white ml-1">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400 ml-1">{plan.period}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-secondary-500 mt-1">
                      Oszczędzasz {plan.priceMonthly * 12 - plan.priceAnnual * 12} {plan.currency} rocznie
                    </div>
                  )}
                </div>
                
                <a
                  href={plan.ctaLink}
                  className={`block text-center py-3 px-4 rounded-lg font-medium transition-all mb-8 text-[clamp(0.875rem,0.3vw+0.8rem,1rem)] ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary-600 text-white shadow-md shadow-primary/20 hover:-translate-y-0.5'
                      : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white hover:-translate-y-0.5'
                  }`}
                >
                  {plan.cta}
                </a>
                
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600 dark:text-neutral-300 text-[clamp(0.875rem,0.3vw+0.8rem,1rem)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise note */}
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-xl bg-neutral-50/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-elevation-1">
          <h3 className="text-[clamp(1.2rem,1vw+1rem,1.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
            Potrzebujesz niestandardowego rozwiązania?
          </h3>
          <p className="text-[clamp(0.95rem,0.5vw+0.85rem,1.1rem)] text-neutral-600 dark:text-neutral-300 mb-6">
            Skontaktuj się z nami, aby omówić indywidualne wdrożenie dopasowane 
            do unikalnych potrzeb Twojej firmy i procesów biznesowych.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-[clamp(0.95rem,0.5vw+0.85rem,1.1rem)] transition-all hover:-translate-y-0.5"
          >
            Porozmawiajmy o Twoich potrzebach
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
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

export { PricingSection };