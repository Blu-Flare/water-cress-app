# Water Cress Designers — Website

A production-ready single-page application for **Water Cress Designers**, a premium paving, tiling and hardscaping business in Botswana.

The build follows the supplied `architecture.md` sitemap and the visual language of `ref.html` (Graphite / Teal / Renewal Green, Montserrat, gloss sweep, word-pop and 3D parallax), rebuilt with React, Tailwind CSS, Zustand and Framer Motion.

---

## Tech stack

| Concern | Tool |
| --- | --- |
| Framework | React 18 + Vite |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 6 |
| State | Zustand 5 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Font | Montserrat (Google Fonts) |

---

## Getting started

Exact setup commands (Tailwind is pinned to v3 because the project uses `tailwind.config.js` and `npx tailwindcss init -p`):

```bash
# 1. Scaffold the app
npm create vite@latest water-cress-app -- --template react

# 2. Install base dependencies
cd water-cress-app
npm install

# 3. Install Tailwind CSS 3 + PostCSS
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

# 4. Install routing, state, animation and icons
npm install react-router-dom zustand framer-motion lucide-react

# 5. Run the development server
npm run dev
```

The repository already contains the completed source, so if you are using this folder directly:

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

---

## Design tokens

Defined in `tailwind.config.js` and `src/index.css`.

| Token | Value | Usage |
| --- | --- | --- |
| `graphite-industrial` | `#1C1C1C` | Main background |
| `graphite-teal` | `#002E32` | Header, footer, cards |
| `renewal-green` | `#BAD435` | Accents, buttons, highlights |
| `pure-white` | `#FFFFFF` | Headings |
| `cool-grey` | `#F2F5F4` | Body copy |

Custom CSS includes the signature `.gloss-sweep` sheen, `.word` / `.reveal-card` classes, grid textures, focus styles, reduced-motion handling and accessible form controls.

---

## Project structure

```text
water-cress-app/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects            # Netlify SPA fallback
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Header, footer, mobile CTA, page transitions, Outlet
│   │   ├── Navbar.jsx        # Sticky nav + animated mobile dropdown
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx   # 3D pointer tilt + gloss sweep
│   │   ├── ProjectCard.jsx   # Gallery tile with hover overlay
│   │   ├── ArchiveModal.jsx  # Zustand-driven slideshow + project details
│   │   ├── AnimatedText.jsx  # Word-pop headings
│   │   ├── QuoteForm.jsx     # Zustand-backed WhatsApp quote request
│   │   ├── PageHeader.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Reveal.jsx
│   │   ├── MobileCTA.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Logo.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Archive.jsx
│   │   ├── FAQ.jsx
│   │   └── NotFound.jsx
│   ├── store/
│   │   └── useStore.js
│   ├── hooks/
│   │   └── useSEO.js
│   ├── data/
│   │   ├── site.js           # Contact details, reviews, values, process
│   │   ├── services.js
│   │   ├── projects.js
│   │   └── faqs.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json               # Vercel SPA fallback
```

---

## Features

- **Five routes** — Home, About, Services, Archive, FAQ, plus a 404 page.
- **Page transitions** with Framer Motion `AnimatePresence`.
- **Word-pop headings** via `AnimatedText`, which respects `prefers-reduced-motion`.
- **3D parallax** “Why Choose Us” cards driven by scroll progress.
- **Service cards** with pointer-based 3D tilt, gloss sweep and image zoom.
- **Archive** with category filters (All / Paving / Tiling / Hardscaping), 15 projects and a keyboard-accessible slideshow modal.
- **Zustand store** for the mobile menu, quote form draft and archive modal.
- **Quote form → WhatsApp**: builds a formatted message and opens `wa.me/26775981530`. A fallback link is shown if a popup is blocked.
- **Sticky mobile CTA** for Call / WhatsApp on small screens.
- **SEO**: per-route title/description/canonical/Open Graph via `useSEO`, JSON-LD LocalBusiness schema, `robots.txt`, `sitemap.xml`.
- **Accessibility**: skip link, semantic landmarks, focus-visible rings, `aria-expanded` menus, accordion controls, modal focus trap, Escape/arrow-key support and reduced-motion support.

---

## Customising content

| What | Where |
| --- | --- |
| Phone, WhatsApp, email, socials, hours | `src/data/site.js` |
| Service cards | `src/data/services.js` |
| Archive projects, locations, scopes, slideshow images | `src/data/projects.js` |
| FAQs | `src/data/faqs.js` |
| Page copy / headings | individual files in `src/pages/` |
| Brand colours / shadows / animations | `tailwind.config.js`, `src/index.css` |

All displayed imagery is imported from the local `assets/` folder at the project root, so the site has no third-party image dependency. Add or replace photos there and update the matching import in `src/data/services.js`, `src/data/projects.js`, or the relevant page/component.

---

## Deployment

The app is a client-side SPA, so the host must serve `index.html` for unknown paths.

- **GitHub Pages** — live at <https://blu-flare.github.io/water-cress-app/>. The published build lives in `docs/` and is served by GitHub Pages. Vite uses `base: '/water-cress-app/'` so assets resolve under the project path, and `docs/404.html` provides the SPA fallback for deep links.
- **Netlify** — `public/_redirects` is included (`/* /index.html 200`).
- **Vercel** — `vercel.json` is included with the rewrite.
- **Apache / Nginx** — add a fallback rewrite to `/index.html`.
- **Static hosts** — build with `npm run build` and upload `dist/`.

To publish an update to GitHub Pages, rebuild and refresh the `docs/` folder, then commit and push:

```bash
npm run deploy:docs
git add docs
git commit -m "Update GitHub Pages build"
git push
```

Before going live, update the canonical/OG domain (`watercressdesigners.co.bw`) in `index.html`, `public/robots.txt`, `public/sitemap.xml` and the built `docs/` copies if the live domain differs.
