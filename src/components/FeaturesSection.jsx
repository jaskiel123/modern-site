import React from 'react';
import FeatureCard from './FeatureCard';

const featuresData = [
  {
    title: "Automatyzacja Dokumentów",
    description: "Eliminacja ręcznego wprowadzania faktur i dokumentów. Zautomatyzuj ich przetwarzanie i skróć czas pracy o 70%.",
    icon: "📄",
  },
  {
    title: "Inteligentna Obsługa Maili",
    description: "Automatyczne sortowanie, kategoryzowanie i odpowiadanie na rutynowe wiadomości. Odzyskaj nawet 12 godzin tygodniowo.",
    icon: "📬",
  },
  {
    title: "Asystent Przepływu Danych",
    description: "Koniec z ręcznym kopiowaniem informacji między systemami. Nasi AI Agenci przenoszą dane automatycznie z dokładnością 99.8%.",
    icon: "🔄",
  },
  {
    title: "Analiza Rynku i Konkurencji",
    description: "Monitorowanie ofert konkurencji i trendów rynkowych 24/7, dostarczając kluczowe informacje wspierające decyzje biznesowe.",
    icon: "📊",
  },
  {
    title: "Personalizacja Obsługi Klienta",
    description: "Automatycznie dostosowywanie komunikacji do preferencji klienta, zwiększając konwersję i satysfakcję o 35%.",
    icon: "👥",
  },
  {
    title: "Bezpieczeństwo i Zgodność GDPR",
    description: "Wszystkie procesy zgodne z najwyższymi standardami bezpieczeństwa i przepisami GDPR. Twoje dane są zawsze chronione.",
    icon: "🔒",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-100/30 dark:bg-primary-800/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-secondary-100/30 dark:bg-secondary-800/10 blur-3xl"></div>
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">Jak AutoAI Transformuje Twój Biznes</h2>
        <p className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Nasze rozwiązania AI eliminują powtarzalne zadania i optymalizują przepływ pracy, 
          dzięki czemu możesz skupić się na strategicznym rozwoju Twojej firmy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index} 
            className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-8 rounded-xl shadow-elevation-2 hover:shadow-elevation-3 border border-neutral-100/80 dark:border-neutral-700/80 hover:-translate-y-1"
            delay={index * 0.1} // Stagger the animations
          >
            <div className="flex flex-col items-start">
              <div className="bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 p-3 rounded-lg mb-5">
                <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
              </div>
              <h3 className="font-semibold text-[clamp(1.1rem,0.75vw+0.9rem,1.3rem)] text-primary-700 dark:text-primary-300 mb-3">{feature.title}</h3>
              <p className="text-[clamp(0.95rem,0.5vw+0.85rem,1.1rem)] text-neutral-600 dark:text-neutral-300">{feature.description}</p>
            </div>
          </FeatureCard>
        ))}
      </div>
      
      <style jsx>{`
        .bg-noise {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=');
          background-repeat: repeat;
        }
      `}</style>
    </div>
  );
};

export { FeaturesSection };
export default FeaturesSection;