import { useState, useRef, useEffect } from 'react';

export default function BehindTheScenes() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    { src: '/images/fb images/660303065_1560254669438126_1355849065066534695_n.jpg', alt: 'Fresh pastries coming out of the oven' },
    { src: '/images/fb images/661314680_1560249892771937_3930132963573726330_n.jpg', alt: 'Kneading dough by hand' },
    { src: '/images/fb images/662512316_1560253516104908_746035388495459649_n.jpg', alt: 'Decorating cakes' },
    { src: '/images/fb images/659897652_1560251506105109_4159432268655069862_n.jpg', alt: 'Morning prep in the kitchen' },
    { src: '/images/fb images/660191204_1560247966105463_2989775883498892568_n.jpg', alt: 'Fresh bread cooling' },
    { src: '/images/fb images/661603771_1560252886104971_1042485289877829339_n.jpg', alt: 'Sausage roll preparation' },
  ];

  return (
    <section className="py-24 bg-[#3D2314]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
            Behind the Scenes
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3">
            The Art of Baking
          </h2>
          <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
            Every morning at 5am, our bakers begin crafting the day's offerings. Here's a glimpse into our kitchen.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {images.map((img, i) => (
            <div 
              key={i}
              className={`relative overflow-hidden rounded-xl warm-overlay ${
                i === 0 || i === 5 ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 hover:scale-110 ${
                  i === 0 || i === 5 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
