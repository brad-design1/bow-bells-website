import { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  award?: boolean;
  origin?: string;
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const [cart, setCart] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    {
      name: 'Sausage Roll',
      description: 'Our famous award-winning recipe. Flaky pastry, seasoned pork sausage.',
      price: '£3.50',
      image: '/images/sausage-rolls.jpg',
      award: true,
      origin: 'Made fresh daily with locally sourced pork from County Down farms'
    },
    {
      name: 'Homemade Granola',
      description: 'Served with fresh yogurt and seasonal berries. Irish Food Award winner.',
      price: '£5.95',
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400',
      award: true,
      origin: 'Rolled oats from MacNeans Mill, Belturbet, with honey from local apiaries'
    },
    {
      name: 'Artisanal Sourdough',
      description: 'Traditional slow-fermented sourdough, baked fresh every morning.',
      price: '£4.50',
      image: 'https://images.unsplash.com/photo-1585476263060-b7a6f71dbd7d?w=400',
      origin: '48-hour fermented with our 5-year-old starter, stone-baked'
    },
    {
      name: 'Irish Wheaten Bread',
      description: 'Traditional recipe with treacle and buttermilk. Perfect toasted.',
      price: '£3.95',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      origin: 'Made with coarse wholemeal flour from Andrews Flour, Belfast'
    },
    {
      name: 'Scones (Plain or Fruit)',
      description: 'Light and fluffy, served warm with butter and jam.',
      price: '£2.95',
      image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=400',
      origin: 'Baked throughout the day, always warm'
    },
    {
      name: 'Traybakes & Shortbread',
      description: 'Selection of daily homemade treats. Ask what\'s fresh today.',
      price: 'from £2.50',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
      origin: 'Traditional recipes passed down through generations'
    }
  ];

  const addToCart = (itemName: string) => {
    setCart([...cart, itemName]);
  };

  return (
    <section id="menu" className="py-24 bg-[#E8E0D4]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
            Our Menu
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3D2314] mt-3">
            Baked Fresh Every Morning
          </h2>
          <p className="text-[#6B5B4F] mt-4 text-lg max-w-2xl mx-auto">
            Everything made daily in our bakery. From award-winning favorites to daily specials.
          </p>
        </div>

        {/* Magazine-style Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <article 
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-lift"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden warm-overlay img-hover-zoom">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.award && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#169B62] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Award Winner
                  </div>
                )}
                {/* Fresh timestamp */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-[#3D2314]">
                  <span className="w-2 h-2 bg-[#169B62] rounded-full pulse-dot" />
                  Baked today at 6am
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-[#3D2314]">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[#C17817]">{item.price}</span>
                </div>
                
                <p className="text-[#6B5B4F] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Origin story */}
                {item.origin && (
                  <p className="text-xs text-[#6B5B4F]/70 italic mb-4 border-t border-[#E8E0D4] pt-3">
                    {item.origin}
                  </p>
                )}

                {/* Add to cart */}
                <button 
                  onClick={() => addToCart(item.name)}
                  className="w-full py-3 bg-[#C17817] text-white font-semibold rounded-lg hover:bg-[#A06314] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add to Order
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#3D2314] text-[#3D2314] font-semibold rounded-lg hover:bg-[#3D2314] hover:text-white transition-all"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
