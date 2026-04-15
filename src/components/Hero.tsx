import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/exterior.jpg" 
          alt="Bow Bells Coffee House"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Award Badge */}
        <div className="inline-flex items-center gap-2 bg-[#169B62]/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Double Irish Food Award Winners
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Award-Winning
          <br />
          <span className="text-[#F5F0E8]/90">Coffee House & Bakery</span>
        </h1>

        {/* Subtitle with ownership */}
        <p className="text-lg md:text-xl text-white/80 mb-2">
          Serving Donaghadee since 1975
        </p>
        <p className="text-base text-white/60 mb-8">
          Family-owned since 2020 • Fresh baked daily, loved by generations
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#order"
            className="px-8 py-4 bg-[#C17817] text-white font-semibold rounded-lg hover:bg-[#A06314] transition-all hover:-translate-y-1 hover:shadow-xl text-lg"
          >
            Order Online
          </a>
          <a 
            href="#visit"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#3D2314] transition-all text-lg"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
