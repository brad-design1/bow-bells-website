# Bow Bells Coffee House & Bakery — Website

An Astro + React site for Bow Bells Coffee House & Bakery in Donaghadee,
serving customers since 1975. The site is content-first with a few React
"islands" for interactive UI (infinite scroll gallery, menu carousel).

## Stack

- **[Astro 4](https://astro.build)** — static site, zero-JS by default
- **[React 18](https://react.dev)** — islands for interactive UI
- **TypeScript** — strict mode
- **Vanilla CSS** — design tokens in `src/styles/global.css`

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to ./dist
npm run preview    # preview the production build
```

## Project structure

```
.
├── public/
│   ├── favicon.svg
│   └── photos/
│       ├── exterior.jpg          # Real storefront photo
│       ├── sausage-rolls.jpg     # Award-winning sausage rolls
│       └── (your Facebook photos here)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Awards.astro
│   │   ├── Story.astro
│   │   ├── Menu.astro
│   │   ├── MenuCarousel.tsx      # React island — snap carousel
│   │   ├── MenuCarousel.css
│   │   ├── Gallery.astro
│   │   ├── InfiniteScrollGallery.tsx   # React island — marquee
│   │   ├── InfiniteScrollGallery.css
│   │   ├── Visit.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── site.ts               # Menu items, gallery images, meta
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css            # Design tokens
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Adding your Facebook photos

1. Drop the images into `public/photos/`. Keep filenames short and lowercase.
2. Open `src/data/site.ts` and extend `galleryRowA` / `galleryRowB` with your
   new entries:

   ```ts
   {
     src: '/photos/my-new-photo.jpg',
     alt: 'Describe what is in the photo',
     caption: 'Short caption shown on hover',
     wide: true, // optional, renders as a wider card
   },
   ```

3. The two rows scroll in opposite directions and loop seamlessly. Mix
   wide (`wide: true`) and standard cards for rhythm. Hover any card to
   pause the row and see the caption.

## Design system

Everything is driven by CSS custom properties in `src/styles/global.css`:

- **Palette** — cream `#F5F0E8`, rich-brown `#3D2314`, amber `#C17817`,
  espresso `#1E1912`, sage `#7A8B69`
- **Type** — Fraunces (display), Inter (body), served via Google Fonts
- **Motion** — custom `--ease-out` easing, reveal-on-scroll utility

## Deploy

The repo is connected to Vercel and auto-deploys on push. Astro is
auto-detected; no `vercel.json` required.

---

**Client:** Bow Bells Coffee House & Bakery
**Location:** Donaghadee, Co. Down
