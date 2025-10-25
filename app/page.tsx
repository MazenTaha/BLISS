'use client';

import { useState, useEffect } from 'react';
import LanguageToggle from './components/LanguageToggle';
import VideoSection from './components/VideoSection';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const translations = {
    en: {
      tagline1: "Unique design and materials",
      tagline2: "The international specifications",
      tagline3: "VIP experience",
      subtitle: "Crafting Excellence Since 2025",
      cta: "Discover More"
    },
    ar: {
      tagline1: "تصميم فريد ومواد متميزة",
      tagline2: "المواصفات الدولية",
      tagline3: "تجربة VIP",
      subtitle: "صناعة التميز منذ 2025",
      cta: "اكتشف المزيد"
    }
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/2 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 group">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-modern group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-display font-bold text-2xl">B</span>
            </div>
            <span className="text-3xl font-display font-bold tracking-tight gradient-text">BLISS</span>
          </div>

          {/* Language Toggle */}
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className={`space-y-8 md:space-y-12 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Subtitle */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-gray-600 font-medium tracking-wide uppercase">
              {t.subtitle}
            </p>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6 md:space-y-8">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.8] tracking-[-0.02em] ${
              language === 'ar' ? 'font-arabic' : ''
            } animate-slide-up`}>
              <span className="block relative">
                <span className="bg-gradient-to-r from-black via-gray-900 to-black bg-clip-text text-transparent text-glow">
                  {t.tagline1}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent opacity-30 blur-sm">
                  {t.tagline1}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black bg-clip-text text-transparent opacity-20 blur-[2px]">
                  {t.tagline1}
                </span>
              </span>
            </h1>
            
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[0.85] tracking-[-0.01em] ${
              language === 'ar' ? 'font-arabic' : ''
            } animate-slide-up`} style={{animationDelay: '0.2s'}}>
              <span className="block relative">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent text-glow">
                  {t.tagline2}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent opacity-20 blur-[1px]">
                  {t.tagline2}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent opacity-15 blur-[1.5px]">
                  {t.tagline2}
                </span>
              </span>
            </h2>
            
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[0.9] tracking-wide ${
              language === 'ar' ? 'font-arabic' : ''
            } animate-slide-up`} style={{animationDelay: '0.4s'}}>
              <span className="block relative">
                <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent text-glow">
                  {t.tagline3}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent opacity-25 blur-[0.5px]">
                  {t.tagline3}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent opacity-10 blur-[1px]">
                  {t.tagline3}
                </span>
              </span>
            </h3>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up pt-8" style={{animationDelay: '0.6s'}}>
            <button className="group relative px-12 py-4 bg-black text-white font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-modern">
              <span className="relative z-10">{t.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div className="px-6 pb-20">
        <VideoSection />
      </div>

      {/* Contact Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center space-y-8">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Ready to experience the BLISS difference? Contact us today.
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative max-w-xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-modern border border-black/10 hover:shadow-2xl transition-all duration-500 group">
              {/* Phone Icon */}
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              {/* Phone Number */}
              <div className="space-y-3">
                <h3 className="text-xl font-display font-semibold text-gray-700 mb-1">
                  Call Us Now
                </h3>
                <a 
                  href="tel:+1234567890" 
                  className="inline-block text-3xl md:text-4xl font-display font-bold text-black hover:text-gray-600 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
                <p className="text-gray-500 text-sm">
                  Available 24/7
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-black/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-black/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-5 bg-white/50 backdrop-blur-sm rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-300">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-base font-display font-semibold mb-1">Email Us</h4>
              <p className="text-sm text-gray-600">info@bliss.com</p>
            </div>

            <div className="text-center p-5 bg-white/50 backdrop-blur-sm rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-300">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-base font-display font-semibold mb-1">Visit Us</h4>
              <p className="text-sm text-gray-600">123 Design Street</p>
            </div>

            <div className="text-center p-5 bg-white/50 backdrop-blur-sm rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-300">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-base font-display font-semibold mb-1">Business Hours</h4>
              <p className="text-sm text-gray-600">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative max-w-7xl mx-auto px-6 py-20 text-center border-t border-black/10">
        <div className="space-y-4">
          <p className="text-sm text-gray-500 font-medium">© 2025 BLISS. All rights reserved.</p>
          <div className="flex justify-center space-x-8 text-xs text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
