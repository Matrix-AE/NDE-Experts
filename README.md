<div align="center">

# NDE Experts

### Non‑Destructive Testing · Asset Integrity · Inspection & Training

**30+ years of uncompromising inspection.** The official website of **Tahir Nazir** —
ASNT NDT Level III Consultant (Cert. No. 209996) — showcasing services, technical
expertise, projects, credentials and training across the Oil & Gas, Power, Petrochemical,
Fertilizer, Aviation and Nuclear sectors.

Refined **black‑and‑white** design · fully responsive · accessible · smooth by default.

</div>

---

## ✨ Highlights

- **Refined monochrome design system** — ink, layered greys and warm paper, with the
  brand *NDE* gradient (blue→red) used sparingly on the hero, headings and key numbers to
  add life without clutter.
- **Clear service & course catalog** — bold, scannable service cards and a detailed
  Standards‑Compliance section (ASME, API, AWS, ISO 9712, ISO/IEC 17020/24/25, RCC‑M…).
- **Trusted‑by logo wall** — real client/institution logos (PIA, PPL, MPCL, FFC, FFBL,
  PAC, NCNDT, SGS, PAEC).
- **Working contact form** — assembles an email to `info@ndeexperts.com` (cc
  `tahir.nazir@ndeexperts.com`) with a detailed service/course picker.
- **Motion‑friendly & accessible** — scroll‑reveal animations, an animated “How We Work”
  process, `prefers-reduced-motion` support, scroll‑to‑top on navigation, and a safety net
  so content is never trapped invisible.

## 🧭 Pages

`Home` · `About` · `Services` · `Projects` · `Expertise` · `Training` ·
`Certifications` · `Publications` · `Gallery` · `Contact`

## 🛠️ Tech stack

| | |
|---|---|
| Framework | **React 19** |
| Routing | **react‑router‑dom 7** |
| Build tool | **Vite 8** |
| Styling | Hand‑authored CSS design system (`src/index.css`) + per‑page CSS |
| Fonts | Inter (Google Fonts) |
| Logos | Wikimedia Commons (org logos), inline SVG (sector icons & brand mark) |

No UI framework, no CSS‑in‑JS — just a small, fast, dependency‑light front end.

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build → dist/
npm run build

# 4. Preview the production build locally
npm run preview
```

## 📁 Project structure

```
my-react-app/
├─ public/
│  ├─ logo.png            # brand mark (also drives the favicon)
│  ├─ favicon.svg         # monochrome favicon derived from the logo
│  └─ logos/              # organization logos (swap files to update)
├─ src/
│  ├─ index.css           # design tokens + shared component styles (single source of truth)
│  ├─ App.jsx             # routes + ScrollToTop
│  ├─ components/         # Navbar, Footer, HeroCanvas, Counter, TrustWall …
│  ├─ pages/              # one .jsx + .css per route
│  └─ hooks/              # useScrollReveal, useStickyNav, useFilterTabs …
└─ index.html
```

## 🎨 Customizing

- **Theme** — every colour, radius and timing lives in the `:root` block at the top of
  [`src/index.css`](src/index.css). The brand gradient is defined once and reused.
- **Contact details** — emails/phones live in
  [`src/pages/Contact.jsx`](src/pages/Contact.jsx),
  [`src/pages/About.jsx`](src/pages/About.jsx) and
  [`src/components/Footer.jsx`](src/components/Footer.jsx).
- **Organization logos** — drop a file with the same name into `public/logos/`
  (e.g. `pia.png`, `sgs.svg`) and it replaces the current one automatically; missing files
  fall back to a clean wordmark. Orgs are listed in
  [`src/components/TrustWall.jsx`](src/components/TrustWall.jsx).
- **Sector images** — the Industries cards use inline monochrome illustrations; add a real
  photo by giving a card `has-photo` and an `<img>` (see the comment in `Home.jsx`).

## 📇 Contact

**Tahir Nazir** — NDT Level III Consultant, Islamabad, Pakistan
✉️ info@ndeexperts.com · tahir.nazir@ndeexperts.com
📞 +92 300 5212968 · +92 313 8112968

---

<div align="center"><sub>Built with React + Vite. Logos are the property of their respective owners.</sub></div>
