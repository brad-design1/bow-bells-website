export default function AwardsMarquee() {
  const awards = [
    { title: 'Best Sausage Roll', org: 'Irish Food Award Winner' },
    { title: 'Best Granola', org: 'Irish Food Award Winner' },
    { title: 'Serving Since 1975', org: 'Nearly 50 Years' },
    { title: 'Family Owned', org: 'Waterworth Family Since 2020' },
    { title: 'Dog Friendly', org: 'Bring Your Best Friend' },
  ];

  // Duplicate for seamless loop
  const items = [...awards, ...awards];

  return (
    <section className="bg-[#169B62] py-6 overflow-hidden">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {items.map((award, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="text-white">
              <p className="font-semibold text-lg">{award.title}</p>
              <p className="text-white/80 text-sm">{award.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
