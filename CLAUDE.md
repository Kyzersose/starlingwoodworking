# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for **Starling Woodworking**, a family woodworking business in Franklin (Tuskegee), AL. The site is hosted on GitHub Pages at `starlingwoodworking.com` (CNAME). No build tools, no frameworks, no npm — just static files.

## Local Development

Open `index.html` directly in a browser, or run a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Site Goals

- Immediately convey high-quality craftsmanship to visitors
- Showcase work through real photos (the primary content)
- Convert visitors to clients via email (`info@starlingwoodworking.com`) or phone (`334-651-1661`)
- **No pricing shown** — all inquiries go through contact/meeting requests
- Fast load times; images must be compressed for spotty rural cell coverage

## Current Branch State (`freshtake`)

This branch is a redesign from scratch. The original site files (`index.html`, `styles.css`, `script.js`, `README.md`) from `master` have been deleted. The redesign should incorporate:
- Real product photos now available in `/images/` (organized by category)
- Testimonials from Facebook (facebook.com/starlingwoodworking)
- Animations (Spline / Rive were noted as options to explore)
- Warm, professional aesthetic — wood tones, quality craftsmanship feel

## Image Assets

Photos are organized under `/images/` by product category:
- `ClassicStyle/` — Classic style bedroom/furniture pieces
- `CraftsmanStyle/` — Craftsman style pieces
- `FarmhouseStyle/` — Farmhouse style pieces
- `HomeDecor/` — Smaller decor items (jewelry boxes, candle holders, etc.)
- `MiscBuilds/` — Various builds that don't fit a single category
- `ProcessPics/` — In-progress/workshop shots showing the craft
- `Logo/` — Brand assets including `Website Logo.svg` and PNG/JPG variants

All product photos are JPEGs. Images need compression before production — target under 500KB per image.

## Business Info

- **Store location:** Angel's Antiques, 900 Columbus Pkwy, Opelika, AL 36801
- **Phone:** 334-651-1661
- **Email:** info@starlingwoodworking.com
- **Facebook/Instagram:** starlingwoodworking
- **Styles offered:** Farmhouse, Classic, Craftsman
- **Materials:** Poplar, oak, walnut, maple, cherry hardwoods
- **Tagline:** "We build lifetime-quality furniture for everyday budgets."

## Deployment

Push to `master` → GitHub Pages auto-deploys to `starlingwoodworking.com`. The `CNAME` file must remain in the repo root.
