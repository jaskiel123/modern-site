import React from 'react';
import { motion } from 'framer-motion';

const ExampleSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
      <div aria-hidden="true" className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-primary-100/30 dark:bg-primary-800/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-40 left-0 w-80 h-80 rounded-full bg-secondary-100/30 dark:bg-secondary-800/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
            Przykład efektu
          </h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-10 rounded-xl shadow-elevation-2 border border-neutral-100/80 dark:border-neutral-700/80 text-center"
        >
          <p className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] text-neutral-700 dark:text-neutral-200 font-medium">
            „Marek – automatyzacja 2 procesów → <span className="text-primary font-bold">–11 h/tydz</span>, <span className="text-primary font-bold">+73 800 zł rocznie</span>"
          </p>
        </motion.div>
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

export { ExampleSection };