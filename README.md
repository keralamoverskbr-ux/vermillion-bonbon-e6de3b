# Kerala Movers and Packers — Al Khobar

The website for Kerala Movers and Packers, a house-shifting and relocation company based in Al Khobar, serving Dammam, Dhahran and the wider Eastern Province of Saudi Arabia. It is a single, fast landing page that explains the services, shows the areas covered and turns visitors into quote requests.

## Features

- Hero, services, "why us", process, service areas, reviews and FAQ sections
- Free-quote request form (move type, from/to, size, date, extra services) handled by **Netlify Forms**, so submissions show up in the Netlify dashboard and can trigger email notifications
- Optional call and WhatsApp buttons, including a sticky action bar on mobile
- Custom photography generated for the site, served through the **Netlify Image CDN** as resized WebP

## Tech stack

- TanStack Start (React 19, TanStack Router) on Vite
- Tailwind CSS 4
- Netlify Forms, Netlify Image CDN
- lucide-react icons, Fraunces + Manrope fonts

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

`netlify dev` emulates Netlify Forms and the Image CDN locally.

## Customising business details

Phone, WhatsApp, email, opening hours and service areas live in `src/data/business.ts`. Call and WhatsApp buttons only appear after you add the numbers there. The reviews in `src/routes/index.tsx` are sample copy, so replace them with real customer reviews before you promote the site.
