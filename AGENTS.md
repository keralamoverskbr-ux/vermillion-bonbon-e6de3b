# AGENTS.md

## Project

Single-page marketing site for **Kerala Movers and Packers** (Al Khobar, Eastern Province, KSA). Goal: generate quote requests. Built with TanStack Start + React 19 + Tailwind CSS 4, deployed on Netlify.

## Structure

```
public/
  __forms.html        # Static Netlify Forms skeleton for the "quote" form (build-time detection)
  img/                # Generated photos (hero, packing, office, carpentry) — always serve via Image CDN
src/
  data/business.ts    # Business details, areas, move types, extras + imageUrl/phoneHref/whatsappHref helpers
  components/
    SiteHeader.tsx    # Fixed header, transparent over hero, mobile menu
    QuoteForm.tsx     # Netlify Forms quote form (AJAX POST to /__forms.html)
    Faq.tsx           # Accordion with FAQ content
    SiteFooter.tsx
  routes/
    __root.tsx        # HTML shell, SEO meta, Google Fonts
    index.tsx         # Home page: all sections + services/steps/reviews content arrays
  styles.css          # Tailwind theme tokens (navy, sand, saffron, palm), kasavu stripe, animations
```

## Conventions & non-obvious decisions

- **Forms:** The quote form posts URL-encoded data to `/__forms.html`, not `/`, because the SSR handler would otherwise swallow the POST. Any field added to `QuoteForm.tsx` must also be added to `public/__forms.html`. Toggle-chip values (`move-type`, `extras`) are set into FormData on submit.
- **Images:** Use `imageUrl(file, width)` from `src/data/business.ts`, which goes through `/.netlify/images`. Never reference `/img/*.png` directly; the originals are about 1.8 MB each.
- **Contact info:** `phone`, `whatsapp` and `email` in `business.ts` are empty until the owner provides them. UI that depends on them renders only when they are set, and CTAs fall back to `#quote`.
- **Reviews** in `index.tsx` are placeholder copy until real reviews are supplied.
- Theme colours are Tailwind v4 `@theme` tokens (`bg-navy-900`, `text-saffron-400`, etc.). Display font is `font-display` (Fraunces).
- Navigation uses in-page anchors (`#services`, `#quote`, ...). `scroll-padding-top` in `styles.css` offsets the fixed header.
