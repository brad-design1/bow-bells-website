import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "The sausage rolls are absolutely incredible. Worth the drive from Belfast alone!",
      author: "Sarah M.",
      location: "Belfast",
      rating: 5,
      ordered: "Sausage Roll, Coffee"
    },
    {
      quote: "Best granola I've ever tasted. We now buy bags of it to take home. The awards are well deserved.",
      author: "James & Claire T.",
      location: "Dublin",
      rating: 5,
      ordered: "Granola Bowl, Scones"
    },
    {
      quote: "Such a warm, welcoming place. The staff remember our names and our dog loves coming too!",
      author: "Emma W.",
      location: "Donaghadee Local",
      rating: 5,
      ordered: "Weekly Regular"
    },
    {
      quote: "Proper Irish wheaten bread, just like my grandmother used to make. This place is a treasure.",
      author: "Michael P.",
      location: "London (visiting)",
      rating: 5,
      ordered: "Wheaten Bread, Scones"
    }
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
            What Our Customers Say
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3D2314] mt-3">
            Loved by Locals & Visitors
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="bg-[#F5F0E8] rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 text-[#C17817]/20 font-playfair text-7xl leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} viewBox="0 0 24 24" fill="#C17817" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-playfair text-xl text-[#3D2314] mb-6 relative z-10 italic leading-relaxed">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#E8E0D4] pt-4">
                <div>
                  <p className="font-semibold text-[#3D2314]">{t.author}</p>
                  <p className="text-sm text-[#6B5B4F]">{t.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6B5B4F]">Ordered:</p>
                  <p className="text-sm text-[#3D2314]">{t.ordered}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
