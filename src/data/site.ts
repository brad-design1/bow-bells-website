// Central content store for the site.
// Drop real Facebook-scraped photos into /public/photos and reference them here.

export const siteMeta = {
  name: 'Bow Bells Coffee House & Bakery',
  shortName: 'Bow Bells',
  tagline: 'Baked fresh in Donaghadee since 1975.',
  description:
    'Award-winning coffee house and bakery in Donaghadee. Irish Food Award winners for our famous sausage rolls and granola, fresh baked daily.',
  founded: 1975,
  location: 'Donaghadee, Co. Down',
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
};

// Infinite-scroll gallery images.
// When the Facebook photo folder is added to /public/photos, extend this list.
export const galleryRowA: GalleryImage[] = [
  {
    src: '/photos/exterior.jpg',
    alt: 'Bow Bells storefront in Donaghadee',
    caption: 'The storefront, High Street',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=70',
    alt: 'Golden sourdough loaves cooling on a rack',
    caption: 'Sourdough, still warm',
  },
  {
    src: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=900&q=70',
    alt: 'Flat white with rosetta latte art',
    caption: 'Flat white, single origin',
  },
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1100&q=70',
    alt: 'Pastries in the display case',
    caption: 'Pastry, laminated overnight',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=900&q=70',
    alt: 'Fresh croissant with a flaky interior',
    caption: 'All-butter croissant',
  },
  {
    src: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?w=900&q=70',
    alt: 'Cinnamon bun with glaze',
    caption: 'Morning bun',
  },
  {
    src: '/photos/sausage-rolls.jpg',
    alt: 'Award-winning Bow Bells sausage rolls',
    caption: 'Sausage roll — Irish Food Award',
    wide: true,
  },
];

export const galleryRowB: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=70',
    alt: 'Espresso being pulled into a cup',
    caption: 'Morning pull',
  },
  {
    src: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=1100&q=70',
    alt: 'Rustic bakery counter',
    caption: 'Counter at 7am',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=900&q=70',
    alt: 'Fresh baked scones',
    caption: 'Scones, still warm',
  },
  {
    src: 'https://images.unsplash.com/photo-1534432182912-63863115e106?w=900&q=70',
    alt: 'Cappuccino from above',
    caption: 'Cappuccino',
  },
  {
    src: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=1100&q=70',
    alt: 'Baker shaping dough by hand',
    caption: 'Hands, 5am',
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1590368746679-a403fce9a6b4?w=900&q=70',
    alt: 'Caramelized pastry on a plate',
    caption: 'Kouign-amann',
  },
  {
    src: 'https://images.unsplash.com/photo-1586985289906-406988974504?w=900&q=70',
    alt: 'Scone with jam and cream',
    caption: 'Cream tea',
  },
];

export const menuItems = [
  {
    name: 'Sausage Roll',
    meta: 'Irish Food Award Winner',
    description:
      'Our signature. All-butter flaky pastry, pork shoulder, sage, and secret spice. The reason people drive from Belfast.',
    price: '£3.80',
    image: '/photos/sausage-rolls.jpg',
    badge: 'Signature',
  },
  {
    name: 'Homemade Granola',
    meta: 'Irish Food Award Winner',
    description:
      'Slow-baked oats, toasted almonds, honey, and a whisper of cinnamon. Bagged by hand, every morning.',
    price: '£6.50',
    image:
      'https://images.unsplash.com/photo-1517593456320-28c7b1b1c36a?w=1000&q=75',
  },
  {
    name: 'Sourdough Loaf',
    meta: 'Fermented 36 hours',
    description:
      'A crackling crust, an open crumb, and a tang that means we took our time. Baked dark the way it should be.',
    price: '£5.20',
    image:
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=1000&q=75',
  },
  {
    name: 'Wheaten Bread',
    meta: 'A Northern Irish staple',
    description:
      'Stone-ground wholemeal, buttermilk, treacle. Dense, soft, and made for salted butter and strong tea.',
    price: '£4.40',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=75',
  },
  {
    name: 'Butter Croissant',
    meta: 'Laminated overnight',
    description:
      'Three folds, eighty-one layers, French butter. A breakfast worth setting an alarm for.',
    price: '£3.20',
    image:
      'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=1000&q=75',
  },
  {
    name: 'Single-Origin Flat White',
    meta: 'House espresso',
    description:
      'Rotating single origin, pulled short, finished with silky textured milk. The double shot is the default.',
    price: '£3.40',
    image:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&q=75',
  },
];
