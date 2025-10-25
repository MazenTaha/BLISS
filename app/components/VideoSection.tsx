'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
            Experience BLISS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in our world of exceptional design and premium materials
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          <div 
            className="relative w-full rounded-3xl overflow-hidden shadow-modern transition-all duration-500 hover:shadow-2xl"
            style={{ aspectRatio: '16/9' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Video Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl overflow-hidden">
              {/* Placeholder for your video */}
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                </div>
                
                {/* Play Button */}
                <div className="relative z-10 text-center text-white space-y-6">
                  <div className={`w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 ${isHovered ? 'scale-110 bg-white/30' : ''}`}>
                    <svg
                      className="w-10 h-10 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-display font-semibold">Your Video Here</p>
                    <p className="text-sm opacity-70">Add your video URL or upload</p>
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              
              {/* 
              Uncomment and use this when you have your video:
              
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              */}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-6 w-6 h-6 bg-black rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Video Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-black/10 hover:bg-white/70 transition-all duration-300">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">Crafted with the finest materials and attention to detail</p>
            </div>

            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-black/10 hover:bg-white/70 transition-all duration-300">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Global Standards</h3>
              <p className="text-sm text-gray-600">Meeting international specifications and quality benchmarks</p>
            </div>

            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-black/10 hover:bg-white/70 transition-all duration-300">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">VIP Experience</h3>
              <p className="text-sm text-gray-600">Exclusive service and personalized attention for every client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
