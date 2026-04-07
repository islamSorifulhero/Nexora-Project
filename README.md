# Nexora — Digital Studio Website

A full React website built with Vite, Tailwind CSS, and Framer Motion, inspired by the Gradia design aesthetic.

## Stack
- **React 18** + **Vite 6**
- **Tailwind CSS v3** — custom design tokens (cream, ink, sage, amber palettes)
- **React Router v6** — client-side routing
- **Framer Motion** — page transitions & scroll animations
- **Lucide React** — icon set

## Pages
| Route | Page |
|-------|------|
| `/` | Home — Hero, Services overview, Benefits, Stats, Testimonials, CTA |
| `/services` | Services — Service blocks, Pricing packages, CTA |
| `/about` | About — Vision, Team, Awards, Stats, Testimonials |
| `/blog` | Blog — Filterable post grid, Newsletter signup |
| `/contact` | Contact — Multi-step form, Info panel, Map placeholder |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Design Decisions
- **Typography**: Playfair Display (headings) + DM Sans (body) + DM Mono (labels)
- **Palette**: Warm cream backgrounds, deep ink text, sage green accents, amber highlights
- **Animations**: Intersection Observer-based scroll reveals, CSS marquee, float animation
- **Layout**: Fully responsive — mobile-first grid system

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── AnimatedSection.jsx
│   └── TestimonialCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   └── Contact.jsx
├── data/
│   └── index.js
├── index.css
└── main.jsx
```
# Nexora-Project
