interface LanguageToggleProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className="relative px-8 py-4 bg-black text-white font-display font-semibold rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-105 shadow-modern"
      >
        <span className="relative z-10 flex items-center gap-3">
          {language === 'en' ? (
            <>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <span className="text-sm tracking-wide">English</span>
            </>
          ) : (
            <>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <span className="text-sm tracking-wide">العربية</span>
            </>
          )}
        </span>
        
        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-150 rounded-2xl" />
      </button>
    </div>
  );
}
