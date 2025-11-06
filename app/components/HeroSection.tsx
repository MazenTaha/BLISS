'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200")'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 py-6">
          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-3xl font-display font-bold text-white tracking-wider">
              BLISS
            </h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Icon */}
            <button className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-40 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Subtitle */}
        <p className="text-sm font-light uppercase tracking-[0.2em] mb-3 opacity-90">
          master class work
        </p>

        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase leading-tight mb-8 max-w-4xl tracking-wide">
          The final frontier of luxurious living.        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          The ultimate expression of effortless, personalized, intelligent and luxurious living. The ultimate unbothered pleasure, peace and life.
        </p>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-8">
          <button className="text-white uppercase text-base tracking-wider border-b border-white pb-2 hover:opacity-80 transition-opacity">
            list-1
          </button>
          <button className="text-white uppercase text-base tracking-wider border-b border-white pb-2 hover:opacity-80 transition-opacity">
            list-2
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40">
        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-2 z-40">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
}

