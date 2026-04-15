import { useState } from 'react';

export default function OrderCTA() {
  const [selectedOption, setSelectedOption] = useState<'pickup' | 'delivery' | null>(null);

  return (
    <section id="order" className="py-24 bg-[#3D2314]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
          Order Online
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
          Fresh from Our Oven to You
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Order ahead for pickup or delivery. Your favorites, ready when you are.
        </p>

        {/* Order Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <button 
            onClick={() => setSelectedOption('pickup')}
            className={`p-8 rounded-2xl border-2 transition-all text-left ${
              selectedOption === 'pickup'
                ? 'border-[#C17817] bg-[#C17817]/10'
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-[#C17817]/20 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C17817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pickup</h3>
            <p className="text-white/60">Order ahead, skip the queue. Ready in 20 mins.</p>
          </button>

          <button 
            onClick={() => setSelectedOption('delivery')}
            className={`p-8 rounded-2xl border-2 transition-all text-left ${
              selectedOption === 'delivery'
                ? 'border-[#C17817] bg-[#C17817]/10'
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-[#C17817]/20 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C17817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Local Delivery</h3>
            <p className="text-white/60">Fresh to your door. Donaghadee & surrounds.</p>
          </button>
        </div>

        {/* CTA Button */}
        <button 
          disabled={!selectedOption}
          className={`px-12 py-5 text-lg font-semibold rounded-xl transition-all ${
            selectedOption
              ? 'bg-[#C17817] text-white hover:bg-[#A06314] hover:-translate-y-1 hover:shadow-xl'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          Start Your Order
        </button>
      </div>
    </section>
  );
}
