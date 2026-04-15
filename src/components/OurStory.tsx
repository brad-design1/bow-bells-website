import { useState, useRef, useEffect } from 'react';

export default function OurStory() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="our-story" className="py-24 bg-[#F5F0E8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl warm-overlay">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800"
                alt="Bow Bells Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#C17817] text-white px-6 py-4 rounded-xl shadow-xl">
              <span className="font-caveat text-3xl">Since 1975</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3D2314] mt-3 mb-6">
              A Heritage of
              <br />
              Baking Excellence
            </h2>
            
            <p className="text-[#6B5B4F] text-lg mb-6 leading-relaxed">
              Since 1975, Bow Bells has been at the heart of Donaghadee, serving our community 
              with freshly baked goods and exceptional coffee. What started as a small family 
              bakery has grown into a beloved institution.
            </p>

            <p className="text-[#6B5B4F] text-lg mb-8 leading-relaxed">
              In 2020, the Waterworth family took the helm, bringing new energy while carefully 
              preserving the traditions that made Bow Bells special. Today, our bakery continues 
              to produce everything fresh daily—from our award-winning sausage rolls to 
              artisanal sourdough.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#C17817] pl-6 py-2">
              <p className="font-playfair text-xl italic text-[#3D2314]">
                "Meticulously restored to its original splendor, with the same heart and soul 
                that's been here for nearly 50 years."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
