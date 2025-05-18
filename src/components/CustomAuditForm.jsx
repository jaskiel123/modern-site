import React, { useState, useEffect } from 'react';

const CustomAuditForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    industry: '',
    peopleCount: '',
    timeSpent1: '',
    timeSpent2: '',
    timeSpent3: '',
    timeSpent4: '',
    timeSpent5: '',
    hourlyCost: '',
    dataSources: '1',
    budget: '<3000 zł',
    biggestProblem: '',
    name: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear validation error when field is edited
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Submit to Tally
  const submitToTally = async () => {
    // Validate form
    const errors = {};
    const requiredFields = ['industry', 'peopleCount', 'timeSpent1', 'hourlyCost', 'biggestProblem', 'name', 'email'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'To pole jest wymagane';
      }
    });
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Wprowadź poprawny adres email';
    }
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a hidden iframe to submit the form without redirecting
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://tally.so/r/nPgeOV'; // Replace with your actual Tally form URL
      form.target = 'hidden_iframe';
      
      // Map our form fields to Tally's expected field names
      const fieldMappings = {
        'industry': 'Branża/Typ firmy',
        'peopleCount': 'Ile osób wykonuje te czynności?',
        'timeSpent1': 'Łączny czas TYGODNIOWO na: 1',
        'timeSpent2': 'Łączny czas TYGODNIOWO na: 2',
        'timeSpent3': 'Łączny czas TYGODNIOWO na: 3',
        'timeSpent4': 'Łączny czas TYGODNIOWO na: 4',
        'timeSpent5': 'Łączny czas TYGODNIOWO na: 5',
        'hourlyCost': 'Średni koszt 1 h pracy (PLN)',
        'dataSources': 'Ile źródeł danych trzeba połączyć? (1 / 2 / 3+)',
        'budget': 'Budżet orientacyjny na start',
        'biggestProblem': 'Największy obecny problem w jednym zdaniu',
        'name': 'Imię',
        'email': 'Email'
      };
      
      // Create input fields for each form field
      Object.entries(fieldMappings).forEach(([ourField, tallyField]) => {
        if (formData[ourField]) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = tallyField; 
          input.value = formData[ourField];
          form.appendChild(input);
        }
      });
      
      // Add a success page URL if needed
      // const successInput = document.createElement('input');
      // successInput.type = 'hidden';
      // successInput.name = 'success_redirect';
      // successInput.value = 'https://autoaipl.com/thank-you'; // Replace with your success page
      // form.appendChild(successInput);
      
      // Append the form to the document, submit it, and remove it
      document.body.appendChild(form);
      
      // Set up the iframe onload handler to detect successful submission
      iframe.onload = () => {
        // Wait a moment to ensure the form has been processed
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          
          // Clean up
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        }, 1000);
      };
      
      // Submit the form
      form.submit();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitToTally();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {submitSuccess ? (
        <div className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-8 rounded-xl shadow-elevation-2 border border-neutral-100/80 dark:border-neutral-700/80 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary-300/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-[clamp(1.25rem,1vw+1rem,1.5rem)] font-semibold text-primary-700 dark:text-primary-300 mb-4">
            Dziękujemy za wypełnienie formularza!
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Skontaktujemy się z Tobą w ciągu 2 godzin z estymacją oszczędności i kosztów.
          </p>
          <button 
            onClick={() => {
              setSubmitSuccess(false);
              if (onClose) onClose();
            }} 
            className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition-all"
          >
            Wypełnij ponownie
          </button>
        </div>
      ) : submitError ? (
        <div className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-8 rounded-xl shadow-elevation-2 border border-neutral-100/80 dark:border-neutral-700/80 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-[clamp(1.25rem,1vw+1rem,1.5rem)] font-semibold text-primary-700 dark:text-primary-300 mb-4">
            Wystąpił błąd podczas wysyłania
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Prosimy spróbować ponownie lub skontaktować się z nami bezpośrednio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => {
                setSubmitError(false);
                if (onClose) onClose();
              }} 
              className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition-all"
            >
              Spróbuj ponownie
            </button>
            <a 
              href="mailto:info@autoaipl.com" 
              className="px-6 py-3 bg-white dark:bg-neutral-700 text-primary dark:text-white border border-primary/20 dark:border-neutral-600 rounded-lg font-medium transition-all"
            >
              Napisz do nas
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-white/90 dark:bg-neutral-800/90 p-4 md:p-8 rounded-xl shadow-elevation-2 border border-neutral-100/80 dark:border-neutral-700/80 relative">
          {/* Close button */}
          {onClose && (
            <button 
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
              aria-label="Zamknij"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Industry/Company Type */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Branża/Typ firmy <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.industry ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="np. e-commerce, produkcja, usługi IT"
              />
              {validationErrors.industry && <p className="mt-1 text-red-500 text-sm">{validationErrors.industry}</p>}
            </div>
            
            {/* Number of people */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Ile osób wykonuje te czynności? <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="peopleCount"
                value={formData.peopleCount}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.peopleCount ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="np. 5"
              />
              {validationErrors.peopleCount && <p className="mt-1 text-red-500 text-sm">{validationErrors.peopleCount}</p>}
            </div>
            
            {/* Weekly time on various tasks - section header */}
            <div className="col-span-full mt-4">
              <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">
                Łączny czas TYGODNIOWO na:
              </h3>
            </div>
            
            {/* Weekly time 1 */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Odpowiadanie na maile <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  type="number"
                  name="timeSpent1"
                  value={formData.timeSpent1}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-4 py-3 rounded-l-lg border-y border-l ${validationErrors.timeSpent1 ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="np. 10"
                />
                <span className="inline-flex items-center px-4 py-3 rounded-r-lg border-y border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                  h/tydz.
                </span>
              </div>
              {validationErrors.timeSpent1 && <p className="mt-1 text-red-500 text-sm">{validationErrors.timeSpent1}</p>}
            </div>
            
            {/* Weekly time 2 */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Przenoszenie danych
              </label>
              <div className="flex">
                <input
                  type="number"
                  name="timeSpent2"
                  value={formData.timeSpent2}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-l-lg border-y border-l border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="np. 8"
                />
                <span className="inline-flex items-center px-4 py-3 rounded-r-lg border-y border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                  h/tydz.
                </span>
              </div>
            </div>
            
            {/* Weekly time 3 */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Obsługa faktur
              </label>
              <div className="flex">
                <input
                  type="number"
                  name="timeSpent3"
                  value={formData.timeSpent3}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-l-lg border-y border-l border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="np. 5"
                />
                <span className="inline-flex items-center px-4 py-3 rounded-r-lg border-y border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                  h/tydz.
                </span>
              </div>
            </div>
            
            {/* Weekly time 4 */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Obsługa leadów/zapytań
              </label>
              <div className="flex">
                <input
                  type="number"
                  name="timeSpent4"
                  value={formData.timeSpent4}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-l-lg border-y border-l border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="np. 6"
                />
                <span className="inline-flex items-center px-4 py-3 rounded-r-lg border-y border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                  h/tydz.
                </span>
              </div>
            </div>
            
            {/* Weekly time 5 */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Inne powtarzalne zadania
              </label>
              <div className="flex">
                <input
                  type="number"
                  name="timeSpent5"
                  value={formData.timeSpent5}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-l-lg border-y border-l border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="np. 4"
                />
                <span className="inline-flex items-center px-4 py-3 rounded-r-lg border-y border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                  h/tydz.
                </span>
              </div>
            </div>
            
            {/* Average cost per hour */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Średni koszt 1 h pracy (PLN) <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  type="number"
                  name="hourlyCost"
                  value={formData.hourlyCost}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-4 py-3 rounded-l-lg border-y border-l ${validationErrors.hourlyCost ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="np. 70"
                />
                <span className="inline-flex items-center px-4 py-3 rounded-r-lg border-y border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                  PLN
                </span>
              </div>
              {validationErrors.hourlyCost && <p className="mt-1 text-red-500 text-sm">{validationErrors.hourlyCost}</p>}
            </div>
            
            {/* Data sources */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Ile źródeł danych trzeba połączyć?
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="dataSources"
                    value="1"
                    checked={formData.dataSources === '1'}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary/50"
                  />
                  <span className="ml-2 text-neutral-700 dark:text-neutral-300">1</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="dataSources"
                    value="2"
                    checked={formData.dataSources === '2'}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary/50"
                  />
                  <span className="ml-2 text-neutral-700 dark:text-neutral-300">2</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="dataSources"
                    value="3+"
                    checked={formData.dataSources === '3+'}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary/50"
                  />
                  <span className="ml-2 text-neutral-700 dark:text-neutral-300">3+</span>
                </label>
              </div>
            </div>
            
            {/* Budget */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Budżet orientacyjny na start
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="<3000 zł">&lt;3000 zł</option>
                <option value="3000-5000 zł">3000-5000 zł</option>
                <option value="5000-10000 zł">5000-10000 zł</option>
                <option value=">10000 zł">&gt;10000 zł</option>
              </select>
            </div>
            
            {/* Biggest problem */}
            <div className="col-span-full">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Największy obecny problem w jednym zdaniu <span className="text-red-500">*</span>
              </label>
              <textarea
                name="biggestProblem"
                value={formData.biggestProblem}
                onChange={handleChange}
                rows="3"
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.biggestProblem ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="np. Tracimy dużo czasu na ręczne przepisywanie danych między systemami."
              ></textarea>
              {validationErrors.biggestProblem && <p className="mt-1 text-red-500 text-sm">{validationErrors.biggestProblem}</p>}
            </div>
            
            {/* Contact info */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Imię <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.name ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="Twoje imię"
              />
              {validationErrors.name && <p className="mt-1 text-red-500 text-sm">{validationErrors.name}</p>}
            </div>
            
            {/* Email */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.email ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="twoj@email.com"
              />
              {validationErrors.email && <p className="mt-1 text-red-500 text-sm">{validationErrors.email}</p>}
            </div>
            
            {/* Estimated monthly savings */}
            <div className="col-span-full mt-2 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-100 dark:border-primary-800/20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-1">
                    Szacowane oszczędności:
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    Na podstawie wstępnych danych - dokładne wyliczenia otrzymasz po wypełnieniu formularza
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-primary-200">
                    {calculateTotalHours() > 0 && formData.hourlyCost > 0 ? (
                      <>
                        ~{Math.round(calculateTotalHours() * 0.7)} h/tydz. | {Math.round(Number(calculateMonthlyCost()) * 0.7).toLocaleString()} PLN/mc
                      </>
                    ) : (
                      <>Uzupełnij dane</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="col-span-full mt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-600 hover:-translate-y-0.5'} shadow-lg shadow-primary/20`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </span>
                ) : (
                  'Wyślij i poznaj potencjał oszczędności'
                )}
              </button>
            </div>
            
            {/* GDPR notice */}
            <div className="col-span-full mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Wysyłając formularz wyrażasz zgodę na przetwarzanie danych zgodnie z naszą{' '}
              <a href="/prywatnosc" className="text-primary hover:underline">
                Polityką Prywatności
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export { CustomAuditForm };rows="3"
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.biggestProblem ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="np. Tracimy dużo czasu na ręczne przepisywanie danych między systemami."
              ></textarea>
              {validationErrors.biggestProblem && <p className="mt-1 text-red-500 text-sm">{validationErrors.biggestProblem}</p>}
            </div>
            
            {/* Contact info */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Imię <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.name ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="Twoje imię"
              />
              {validationErrors.name && <p className="mt-1 text-red-500 text-sm">{validationErrors.name}</p>}
            </div>
            
            {/* Email */}
            <div className="col-span-1">
              <label className="block text-neutral-700 dark:text-neutral-300 mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${validationErrors.email ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                placeholder="twoj@email.com"
              />
              {validationErrors.email && <p className="mt-1 text-red-500 text-sm">{validationErrors.email}</p>}
            </div>
            
            {/* Submit Button */}
            <div className="col-span-full mt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-primary text-white rounded-lg font-semibold transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-600 hover:-translate-y-0.5'} shadow-lg shadow-primary/20`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </span>
                ) : (
                  'Wyślij i poznaj potencjał oszczędności'
                )}
              </button>
            </div>
            
            {/* GDPR notice */}
            <div className="col-span-full mt-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Wysyłając formularz wyrażasz zgodę na przetwarzanie danych zgodnie z naszą{' '}
              <a href="/prywatnosc" className="text-primary hover:underline">
                Polityką Prywatności
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export { CustomAuditForm };