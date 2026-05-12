# Tarik Celik — Esports Portfolio

A cinematic, editorial-style portfolio website for **Tarik Celik** — ELEAGUE Boston Major Champion, VALORANT co-stream pioneer, and Sentinels content creator.

## ✨ Features

- **Cinematic Hero** — Full-bleed editorial layout with liquid-edge masked spine design
- **Dynamic Cursor Logo** — Site logo follows the cursor after scrolling past the hero section
- **Infinite Gallery** — Autoplay horizontal carousel showcasing Tarik's best moments
- **Achievement Timeline** — Immersive cards highlighting career milestones (Boston Major, Co-Stream King, Ludwig x Tarik Invitational)
- **Live Statistics** — Peak viewership, career earnings, events covered, and hours streamed
- **Sentinels Section** — Dedicated feature for the Sentinels partnership
- **Red Bull Collaboration** — Branded collaboration showcase
- **Iconic Quotes** — Oversized typography displaying Tarik's most memorable lines
- **Editorial Footer** — Full background image with social links

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Animations & scroll-driven interactions |
| **Lucide React** | Icon system |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/            # Images & media
├── components/
│   ├── ui/            # Reusable UI primitives (Card, CrosshairLabel, TrackLines)
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Statistics.jsx
│   ├── CinematicBanner.jsx
│   ├── AchievementsTable.jsx
│   ├── SentinelsSection.jsx
│   ├── RedBullCollab.jsx
│   ├── Tournaments.jsx
│   ├── Trivia.jsx
│   ├── Gallery.jsx
│   └── Footer.jsx
├── utils/
│   └── animations.js  # Framer Motion animation variants
├── App.jsx
├── main.jsx
└── index.css          # Design tokens & global styles
```

## 🎨 Design Language

- **Typography** — Cormorant Garamond (serif headings) + Inter (sans-serif body)
- **Color Palette** — Dark charcoal spine, crimson accents, muted editorial tones
- **Layout** — Central dark spine with content bleeding to the edges
- **Effects** — SVG liquid-edge filters, luminosity blend modes, grayscale-to-color hover transitions

## 📄 License

This project is private and not licensed for redistribution.
