# Portfolio App — Cyberpunk / Edgerunners Theme

A [Next.js](https://nextjs.org) (App Router) portfolio with a **Cyberpunk: Edgerunners**
aesthetic — David Martinez jacket–inspired neon hover effects, an animated
cursor-reactive background, and a reusable site-wide header & footer.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).
Edit `app/page.tsx` to change the home page — it hot-reloads.

---

## What was built / changed

### 📦 Packages installed
| Package | Why |
| --- | --- |
| [`react-icons`](https://react-icons.github.io/react-icons/) | Social + UI icons (footer socials, menu, arrow). You said you'll use it later too. |

> Nothing else was added. The project stays on the stock Next.js + Tailwind CSS v4 setup.

### 🎨 Theme & styling — `app/globals.css`
- **Color tokens** defined via Tailwind v4 `@theme` (usable as utilities like
  `text-cyber-cyan`, `bg-cyber-yellow`):
  - `cyber-bg` deep night `#07070d`, `cyber-yellow` `#fcee0a`, `cyber-orange` `#ff6a13`,
    `cyber-pink` `#ff2a6d`, `cyber-cyan` `#05d9e8`, `cyber-purple` `#7b2ff7`.
- **"Jacket" hover effect** (David Martinez inspired) — reusable CSS classes:
  - `.cyber-btn` — angular/chamfered button, neon outline at rest; on hover a
    **yellow→orange gradient sweeps across** (like the jacket's color-blocking),
    text flips dark, edges glow. `.cyber-btn--ghost` = cyan/pink variant.
  - `.nav-link` — glowing cyan→pink underline that sweeps in on hover.
  - `.social-link` — icon buttons with the same gradient sweep + lift + glow.
- **`.text-gradient-cyber`** — animated multi-neon gradient text.
- Custom neon scrollbar, text selection color, and a `prefers-reduced-motion` fallback.

### 🖱️ Animated cursor-reactive background — `app/components/InteractiveBackground.tsx`
- Fixed full-screen layer rendered **on the home page only**.
- Three layers: drifting neon blobs (CSS keyframes), a **parallax grid** that shifts
  opposite the cursor, and a **yellow spotlight** that follows the cursor.
- Pointer position is written to CSS variables (`--x`, `--y`, `--px`, `--py`) inside a
  `requestAnimationFrame` — **no React state on move**, so it stays smooth and never
  re-renders.

### 🧭 Header — `app/components/Header.tsx`  (client component)
- Sticky, glassy (`backdrop-blur`) top bar with a neon bottom border.
- Logo mark + nav links using the `.nav-link` hover effect.
- Responsive: collapses to a hamburger menu (`FiMenu`/`FiX`) on mobile.

### 🦶 Footer — `app/components/Footer.tsx`
- Brand blurb + **social icons as buttons** (GitHub, LinkedIn, X, Instagram, Discord,
  Email) using `react-icons`, each with the `.social-link` jacket-glow hover.
- Neon accent line + auto-updating copyright year.

### 🏠 Layout & home page
- `app/layout.tsx` — loads **Orbitron** (display) + **Rajdhani** (body) via `next/font`,
  and renders `<Header/>` and `<Footer/>` **site-wide** (so every page gets them).
- `app/page.tsx` — hero section: eyebrow tag, gradient headline (`Design. Build. Deploy.`),
  sub-copy, and the **Get Started** button (`.cyber-btn`). The interactive background lives here.

---

## 👉 TODO — things for you to personalize
- **Social links** in `app/components/Footer.tsx` — replace the placeholder URLs
  (`https://github.com/`, `mailto:you@example.com`, …) with yours.
- **Nav routes** in `app/components/Header.tsx` — `#about`, `#work`, `#contact` are anchors;
  point them at real pages/sections when you build them.
- **Brand name** — currently `PORTFOLIO` in the header and footer; swap for your name/logo.

---

## Tech
- Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · react-icons
