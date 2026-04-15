import { useEffect, useRef, useState } from 'react';

export default function ThisWeeksSpecials() {
  const specials = [
    {
      name: 'Sticky Toffee Pudding',
      description: 'Our famous recipe, warm from the oven with vanilla custard',
      price: '£5.95',
      image: '/images/fb images/659123722_1560246966105563_6828799900073230084_n.jpg',
      baked: '6:00 AM'
    },
    {
      name: 'Easter Simnel Cake',
      description: 'Traditional fruit cake with marzipan, seasonal special',
      price: '£18.00',
      image: '/images/fb images/631580132_18087242924332902_8840376627843630811_n.jpg',
      baked: 'Fresh Daily'
    },
    {
      name: 'Hot Cross Buns',
      description: 'Spiced fruit buns, toasted with butter',
      price: '£4.50 (4 pack)',
      image: '/images/fb images/632570439_1517176900412570_7947956702678225540_n.jpg',
      baked: '7:00 AM'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
            Limited Availability
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3D2314] mt-3">
            This Week's Specials
          </h2>
          <p className="text-[#6B5B4F] mt-4 text-lg max-w-2xl mx-auto">
            Handcrafted in small batches. Available while they last.
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item, i) => (
            <div 
              key={i}
              className="group bg-[#F5F0E8] rounded-2xl overflow-hidden card-lift"
            >
              {/* Image with warm overlay */}
              <div className="relative aspect-[4/3] overflow-hidden warm-overlay">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Timestamp badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium text-[#3D2314]">
                  <span className="w-2 h-2 bg-[#169B62] rounded-full pulse-dot" />
                  Baked {item.baked}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-[#3D2314] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#6B5B4F] text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#C17817]">{item.price}</span>
                  <button className="px-4 py-2 bg-[#C17817] text-white text-sm font-semibold rounded-lg hover:bg-[#A06314] transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
