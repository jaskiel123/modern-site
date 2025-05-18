import React, { useEffect, useState } from 'react';

const AuditFormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to open Tally form in a new tab
  const openTallyForm = () => {
    window.open('https://tally.so/r/nPgeOV', '_blank');
  };

  return (
    <section id="audit" className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
      <div aria-hidden="true" className="absolute top-40 left-0 w-96 h-96 rounded-full bg-primary-200/20 dark:bg-primary-800/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-secondary-200/20 dark:bg-secondary-700/10 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(2rem,3vw+1rem,2.5rem)] font-bold text-primary dark:text-primary-300 mb-4">
              Rozpocznij audyt w 60 sekund
            </h2>
            <p className="text-[clamp(1rem,1vw+0.5rem,1.25rem)] text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
              Odpowiedz na kilka pytań, aby poznać potencjał oszczędności w Twojej firmie
            </p>
          </div>
          
          {/* Beautiful styled card with button to trigger Tally form */}
          <div className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 rounded-xl shadow-elevation-2 overflow-hidden border border-neutral-100/80 dark:border-neutral-700/80">
            <div className="p-10 md:p-16 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 dark:bg-primary-300/10 rounded-full mb-6">
                  <svg className="w-10 h-10 text-primary dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-semibold text-primary-700 dark:text-primary-300 mb-4">
                  Wypełnij krótki formularz
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto mb-8">
                  Poznaj możliwości automatyzacji procesów w swojej firmie i dowiedz się, ile czasu możesz odzyskać dzięki wdrożeniu AI.
                </p>
              </div>
              
              <button 
                onClick={openTallyForm}
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all hover:bg-primary-600 hover:-translate-y-0.5 shadow-lg shadow-primary/20 text-[clamp(1rem,0.5vw+0.9rem,1.125rem)]"
              >
                Rozpocznij audyt oszczędności
              </button>
              
              <div className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                Wypełnienie zajmie tylko 60 sekund. Wyniki otrzymasz w ciągu 2 godzin.
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100/60 dark:border-neutral-700/60">
              <div className="flex justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">GDPR Compliant</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Dane są w pełni chronione</p>
            </div>
            <div className="p-4 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100/60 dark:border-neutral-700/60">
              <div className="flex justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Widełki w 2h</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Szybka odpowiedź</p>
            </div>
            <div className="p-4 backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100/60 dark:border-neutral-700/60">
              <div className="flex justify-center mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Ograniczona dostępność</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Tylko 4 wdrożenia / mc</p>
            </div>
          </div>
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

export { AuditFormSection };