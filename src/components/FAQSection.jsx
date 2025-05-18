import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-700 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-[clamp(1.1rem,0.75vw+0.9rem,1.3rem)] font-medium text-neutral-800 dark:text-white">
          {question}
        </h3>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-[clamp(0.95rem,0.5vw+0.85rem,1.1rem)] text-neutral-600 dark:text-neutral-300">
              {typeof answer === 'string' ? (
                <p>{answer}</p>
              ) : (
                answer
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Ile to kosztuje?",
      answer: "Projekty zaczynają się od 3000 zł. Dokładną wycenę otrzymasz po audycie."
    },
    {
      question: "Czy to bezpieczne?",
      answer: "Tak — szyfrowanie end-to-end, hosting ISO 27001, pełna zgodność GDPR."
    },
    {
      question: "Czy potrzebuję zespołu IT?",
      answer: "Nie, całe rozwiązanie hostujemy i utrzymujemy my."
    },
    {
      question: "Czy mogę zacząć od małej automatyzacji?",
      answer: "Tak — MVP uruchamiamy w 14 dni."
    },
    {
      question: "Ile naprawdę kosztuje brak automatyzacji?",
      answer: (
        <>
          <p className="mb-4">Przykład firmy 2-osobowej (właściciel + sekretarka). Nawet przy stawce sekretarki (36 zł/h) tracisz tysiące złotych miesięcznie — a przy Twojej stawce właściciela to już mała fortuna:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4">
              <thead className="bg-primary/10 dark:bg-primary-900/20">
                <tr>
                  <th className="p-3 text-left border-b border-neutral-200 dark:border-neutral-700">Zadanie</th>
                  <th className="p-3 text-left border-b border-neutral-200 dark:border-neutral-700">Godzin / tydz.</th>
                  <th className="p-3 text-left border-b border-neutral-200 dark:border-neutral-700">Koszt właściciela</th>
                  <th className="p-3 text-left border-b border-neutral-200 dark:border-neutral-700">Koszt sekretarki</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">Ręczne przenoszenie danych</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">15 h</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">2 250 zł</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">540 zł</td>
                </tr>
                <tr className="bg-neutral-50/50 dark:bg-neutral-800/30 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50">
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">Odpowiadanie na maile</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">12 h</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">1 800 zł</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">432 zł</td>
                </tr>
                <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">Obsługa faktur</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">8 h</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">1 200 zł</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">288 zł</td>
                </tr>
                <tr className="font-bold bg-primary/5 dark:bg-primary-900/20">
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">SUMA / TYDZIEŃ</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">35 h</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">5 250 zł</td>
                  <td className="p-3 border-b border-neutral-200 dark:border-neutral-700">1 260 zł</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">* Stawka sekretarki 5 691,59 zł brutto / mies. ≈ 36 zł/h.</p>
        </>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      <div aria-hidden="true" className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary-200/20 dark:bg-primary-800/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-secondary-100/30 dark:bg-secondary-800/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące wdrożenia i korzystania z AutoAI
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 rounded-xl shadow-elevation-1 p-8 border border-neutral-100/80 dark:border-neutral-700/80">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
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

export { FAQSection };