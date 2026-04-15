import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#2C2416] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">Bow Bells</h3>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Award-winning coffee house and bakery serving Donaghadee since 1975. 
              Fresh baked daily, loved by generations.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/bowbellscoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C17817] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a 
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C17817] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Our Menu', 'Order Online', 'Our Story', 'Visit Us'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 hover:text-[#C17817] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get news of seasonal specials and events.
            </p>
            {subscribed ? (
              <div className="text-[#7A8B69] font-medium">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C17817]"
                />
                <button 
                  type="submit"
                  className="px-5 py-3 bg-[#C17817] rounded-lg font-semibold hover:bg-[#A06314] transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Bow Bells Coffee House & Bakery. All rights reserved.</p>
          <p>
            Made with <span className="font-caveat text-lg text-[#C17817]">love</span> in Donaghadee
          </p>
        </div>
      </div>
    </footer>
  );
}
