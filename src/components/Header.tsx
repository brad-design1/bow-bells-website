import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-playfair text-2xl font-bold transition-colors ${
          scrolled ? 'text-[#3D2314]' : 'text-white'
        }`}>
          Bow Bells
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {['Our Story', 'Menu', 'Order', 'Visit'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled ? 'text-[#3D2314]' : 'text-white'
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C17817] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href="#order"
            className="hidden sm:inline-flex px-5 py-2.5 bg-[#C17817] text-white text-sm font-semibold rounded-lg hover:bg-[#A06314] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Order Now
          </a>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-[#3D2314]' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 mt-1.5 transition-all ${scrolled ? 'bg-[#3D2314]' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 mt-1.5 transition-all ${scrolled ? 'bg-[#3D2314]' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#F5F0E8] shadow-lg transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="flex flex-col p-6 gap-4">
          {['Our Story', 'Menu', 'Order', 'Visit'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#3D2314] font-medium py-2"
            >
              {item}
            </a>
          ))}
          <a 
            href="#order"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-[#C17817] text-white font-semibold rounded-lg"
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
