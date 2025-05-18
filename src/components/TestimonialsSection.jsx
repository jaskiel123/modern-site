import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Follow-upy idą w minutę, nie w dobę – zamykamy 30 % więcej leadów, a klienci myślą, że mamy całe biuro obsługi.",
    author: "Anna",
    position: "– e-commerce",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "Automatyczne faktury = zero literówek i nadrabiania. Księgowa od trzech miesięcy nie poprawiła ani jednej pozycji.",
    author: "Paweł",
    position: "– szkolenia B2B",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "Synchronizacja CRM↔ERP oddała nam 15 h tygodniowo – handlowcy znowu sprzedają zamiast walczyć z Excelem.",
    author: "Marek",
    position: "– agencja marketingowa",
    image: "/images/testimonial-3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      <div aria-hidden="true" className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-primary-300/20 dark:bg-primary-600/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-10 right-10 w-80 h-80 rounded-full bg-secondary-200/20 dark:bg-secondary-700/5 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
            Opinie naszych klientów
          </h2>
          <p className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Poznaj doświadczenia firm, które już wprowadziły AutoAI do swoich procesów biznesowych
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-8 rounded-xl shadow-elevation-2 border border-neutral-100/80 dark:border-neutral-700/80 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="text-primary-300 mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4 24H8V32H16V40H24V24C24 15.2 16.8 8 8 8V16C12.4 16 16 19.6 16 24H14.4ZM38.4 24H32V32H40V40H48V24C48 15.2 40.8 8 32 8V16C36.4 16 40 19.6 40 24H38.4Z" fill="currentColor" fillOpacity="0.2"/>
                </svg>
              </div>
              
              {/* Testimonial content */}
              <p className="text-[clamp(0.95rem,0.5vw+0.8rem,1.1rem)] text-neutral-700 dark:text-neutral-200 mb-6 flex-grow font-italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center mr-4 overflow-hidden">
                  {/* Placeholder for an image - we'll add actual images later */}
                  <picture>
                    <source srcSet={`${testimonial.image.replace('.jpg', '.avif')}`} type="image/avif" />
                    <source srcSet={`${testimonial.image.replace('.jpg', '.webp')}`} type="image/webp" />
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span class="text-lg font-semibold text-primary">${testimonial.author.charAt(0)}</span>`;
                      }}
                    />
                  </picture>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 dark:text-primary-300">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
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

export { TestimonialsSection };