import { useEffect, useRef, useState } from 'react';
import type { GalleryImage } from '../data/site';
import './InfiniteScrollGallery.css';

interface Props {
  rowA: GalleryImage[];
  rowB: GalleryImage[];
  speedA?: number; // px/sec
  speedB?: number;
}

// A two-row seamless marquee. Each row duplicates its content so the scroll
// loops without a visible jump. Rows move in opposite directions and pause
// on hover. On reduced-motion, the animation is disabled.
export default function InfiniteScrollGallery({
  rowA,
  rowB,
  speedA = 48,
  speedB = 38,
}: Props) {
  return (
    <div className="isg">
      <MarqueeRow images={rowA} direction="left" speed={speedA} />
      <MarqueeRow images={rowB} direction="right" speed={speedB} />
    </div>
  );
}

interface RowProps {
  images: GalleryImage[];
  direction: 'left' | 'right';
  speed: number;
}

function MarqueeRow({ images, direction, speed }: RowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(40);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Measure the first half's width and derive an animation duration from speed.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.scrollWidth / 2; // two copies side-by-side
      const secs = Math.max(20, width / speed);
      setDuration(secs);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    // Re-measure after images load so width is accurate.
    const imgs = el.querySelectorAll('img');
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', measure, { once: true });
    });

    return () => ro.disconnect();
  }, [speed]);

  const duplicated = [...images, ...images];
  const style = {
    animationDuration: `${duration}s`,
    animationDirection: direction === 'left' ? 'normal' : 'reverse',
  } as React.CSSProperties;

  return (
    <div className="isg-row" data-direction={direction}>
      <div ref={trackRef} className="isg-track" style={style}>
        {duplicated.map((img, i) => {
          const index = i % images.length;
          const isActive = activeIndex === index;
          return (
            <figure
              key={`${img.src}-${i}`}
              className={`isg-card ${img.wide ? 'isg-card--wide' : ''} ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              tabIndex={0}
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              {img.caption && (
                <figcaption className="isg-caption">
                  <span className="isg-dot" aria-hidden>●</span>
                  {img.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
}
