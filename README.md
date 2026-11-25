# Garahean Diners website

Website for Garahean Diners, a home-style Filipino diner on Nueva Street, Brgy. 11, Bacolod City. Built with [Astro](https://astro.build) as a static site. Plain CSS and a little JavaScript, no UI framework. Live domain: https://garahean.bacolod.fyi

## Run it
You need Node.js 22.23.4 or newer (Astro 7 requires it).

```sh
npm install
npm run dev      # local site at http://localhost:4321
npm run build    # builds the site into dist/
npm run preview  # serves the built dist/ folder
```

## Structure
- `src/pages/`: one `.astro` file per page (`index`, `about`, `menu`, `gallery`, `contact`)
- `src/layouts/Base.astro`: shared `<head>` (SEO, Open Graph, Restaurant schema), header/nav and footer
- `public/css/style.css`: all styling. Brand colours are the `--` variables at the top
- `public/js/main.js`: gallery lightbox (the mobile menu is pure CSS)
- `public/images/`: web-optimised WebP photos from the Garahean Diners Facebook page
- `public/sitemap.xml`, `public/robots.txt`

## Deploy on xCloud (xcloud.host)
1. Sites → Add New Site → **Astro** (App Type Node.js), pick the server.
2. Connect GitHub, choose this repository and the `main` branch.
3. Build & serving:
   - Node version: **22** (22.23.4 or newer)
   - Install command: `npm install` (or `npm ci`)
   - Build command: `npm run build`
   - Serving mode: **Static build**
   - Web root / output directory: **`dist`**
4. Turn on **Auto-deploy on push** so every push to `main` redeploys.
5. Add the domain `garahean.bacolod.fyi`, point its DNS (A record or CNAME) at the xCloud server, and enable the free SSL certificate.

## To check before launch
- Opening hours and prices were not on Facebook; the site asks visitors to call or check Facebook.
- Dish names were read from photos; confirm them with the owner.
