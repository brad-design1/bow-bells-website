# Bow Bells Coffee House & Bakery Website

## 🚀 Quick Start

### Option 1: Deploy to Vercel (Recommended)
1. Push this folder to a GitHub repository
2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repo
   - Deploy (zero config needed for static HTML)
3. Add custom domain if desired

### Option 2: Netlify Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop this `website` folder
3. Instant deployment

### Option 3: Local Development
```bash
# Serve locally (Python 3)
python -m http.server 8000

# Or use Live Server VS Code extension
```

## 📁 Project Structure

```
website/
├── index.html          # Main website file
├── README.md           # This file
└── (assets/)*          # Future: images, CSS, JS
```

## 🎨 Design System

See `../website-design-system.md` for full design documentation including:
- Color palette
- Typography
- Component library
- Responsive breakpoints

## 🖼️ Images Needed

Replace placeholder Unsplash URLs with real Bow Bells photography:

1. **Hero Background** - Interior with customers or product spread
2. **Story Section** - Historical/current bakery shots
3. **Menu Items** - Individual product photos (sausage rolls, granola, sourdough, wheaten bread)
4. **Team** - Staff portraits
5. **Location** - Exterior with lighthouse

### Image Specifications
- Format: WebP (with JPEG fallback)
- Hero: 1920x1080 minimum
- Menu items: 800x800 (1:1 ratio)
- Optimize for web (TinyPNG, Squoosh)

## ⚡ Performance Checklist

- [ ] Replace placeholder images
- [ ] Add real Google Maps embed URL
- [ ] Add actual contact info/phone
- [ ] Set up Stripe for online ordering
- [ ] Configure email for newsletter
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Lighthouse score 90+

## 🔧 Customization

### Colors
Edit CSS variables in `index.html`:
```css
:root {
    --heritage-cream: #F5F0E8;
    --rich-brown: #3D2314;
    --amber-gold: #C17817;
    /* ... etc */
}
```

### Content
Update text content in HTML:
- Opening hours
- Contact information
- Menu prices
- Award details

## 🌐 SEO Checklist

- [ ] Meta description updated
- [ ] Open Graph tags added
- [ ] Schema.org LocalBusiness markup
- [ ] Google My Business linked
- [ ] Sitemap.xml created
- [ ] robots.txt configured

## 📱 Social Media Integration

- Facebook: Link verified
- Instagram: Add when account created
- Google Reviews: Embed or link

## 🐕 Known Features

- Dog-friendly badge displayed
- Award badges on products
- Mobile-responsive navigation
- Smooth scroll animations
- Sticky header

## 📞 Next Steps

1. **Photography** - Commission professional shots
2. **Content** - Finalize menu, prices, hours
3. **E-commerce** - Integrate Stripe for payments
4. **Launch** - Deploy and announce
5. **Marketing** - Google Ads, social promotion

---

**Created:** April 2026
**Designer:** Genesis Labs
**Client:** Bow Bells Coffee House & Bakery