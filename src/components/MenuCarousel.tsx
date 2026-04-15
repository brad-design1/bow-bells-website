import { useCallback, useEffect, useRef, useState } from 'react';
import './MenuCarousel.css';

export type MenuItem = {
  name: string;
  meta: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

interface Props {
  items: MenuItem[];
}

// Snap-scroll horizontal menu with next/prev controls, keyboard support,
// and a progress indicator. Cards scale/fade based on how close they are
// to the viewport center for a subtle focus-to-center effect.
export default function MenuCarousel({ items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const updateProgress = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max <= 0 ? 0 : el.scrollLeft / max;
    setProgress(p);

    // Determine which card is closest to center
    const center = el.scrollLeft + el.clientWidth / 2;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('.mc-card'));
    let bestIdx = 0;
    let bestDist = Infinity;
    cards.forEach((c, idx) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < bestDist) { bestDist = d; bestIdx = idx; }
    });
    setFocusedIndex(bestIdx);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      el.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [updateProgress]);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.mc-card');
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: 'smooth' });
  };

  return (
    <div className="mc">
      <div className="mc-controls">
        <div className="mc-progress">
          <div
            className="mc-progress-bar"
            style={{ transform: `scaleX(${Math.max(0.02, progress)})` }}
          />
        </div>
        <div className="mc-buttons">
          <button
            className="mc-btn"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous menu items"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="mc-btn"
            onClick={() => scrollByCards(1)}
            aria-label="Next menu items"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mc-scroller"
        role="region"
        aria-label="Menu"
        tabIndex={0}
      >
        {items.map((item, idx) => (
          <article
            key={item.name}
            className={`mc-card ${idx === focusedIndex ? 'is-focused' : ''}`}
          >
            <div className="mc-card-media">
              <img src={item.image} alt={item.name} loading="lazy" />
              {item.badge && <span className="mc-badge">{item.badge}</span>}
            </div>
            <div className="mc-card-body">
              <div className="mc-card-head">
                <h3 className="mc-card-title">{item.name}</h3>
                <span className="mc-card-price">{item.price}</span>
              </div>
              <span className="mc-card-meta">{item.meta}</span>
              <p className="mc-card-desc">{item.description}</p>
              <button className="mc-card-action">
                Add to order
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
