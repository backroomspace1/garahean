# Garahean Diners website

Static site for Garahean Diners, a home-style Filipino diner in Bacolod City. Built with Astro (static output), plain CSS and plain JS. Content and photos come from facebook.com/garahean.

## How it's built
- Astro 7, static output. `npm install`, then `npm run dev`, `npm run build` (writes to `dist/`), `npm run preview`.
- Pages are `src/pages/*.astro`. Each wraps content in `<Base title description path ogImage current>`; `current` marks the nav link.
- `astro.config.mjs` uses `build.format: "file"`, so pages build as `menu.html` etc. Keep links and asset paths relative (`menu.html`, `images/x.webp`).
- Page markup is Astro: a literal `{` or `}` in text must be written as `{"{"}`, and `<script>` tags need `is:inline`.

## Deploy
- xCloud (xcloud.host) Git-deployed Astro site: Node 22, build `npm run build`, Serving mode "Static build", Web root `dist`, branch `main`, auto-deploy on push.
- Live domain: https://garahean.bacolod.fyi (`site` in `astro.config.mjs`).

## Styling
- All in `public/css/style.css`; tokens: gold #E0B43A, charcoal #1D1B19, cream #FBF5E6, red #B3261E.
- Fonts: Playfair Display (headings), Poppins (body) from Google Fonts; icons from Font Awesome 6 CDN.
- Breakpoints: 1024px (burger menu) and 767px (single column).
- Image overlays must stay at or below 40% black.

## Images
- `public/images/*.webp`, quality ~78, max 1920px wide. Add `loading="lazy"` below the first screen.
