# SidColab — Sid's Freelance Portfolio

> **Live Site:** [sidcolab.vercel.app](https://sidcolab.vercel.app)  
> **Role:** Graphic Designer & Video Editor · Motion Graphics · Content Creation · Creative Direction

A tactile, single-page freelance portfolio and visual archive built for **Sid** (`SidColab`), blending a ruled-notebook sketchbook aesthetic with interactive stacked file folders, masking-tape cards, and a dedicated gallery page for posters, YouTube thumbnails, and visiting cards.

---

## Website Concept

Most creative portfolios feel like sterile templates. **SidColab** is designed like a physical studio desk and sketchbook brought to the browser:

- **Ruled Notebook & Grid Shell** — An architectural gray grid canvas framing a warm lined-paper sheet, pairing blocky pixel display typography (`Pixelify Sans`) with handwritten notes (`Patrick Hand`), crisp UI sans (`Plus Jakarta Sans`), and technical monospace labels (`JetBrains Mono`).
- **Tactile Print & Stationery Details** — Translucent masking tape corners, Polaroid cards, serrated postage-stamp skill badges, chamfered physical folder tabs, and an airmail postcard contact section.
- **Stacked Channel & Work Folders** — Work is organized as overlapping physical folders:
  1. **`PROJECT 01 · YOUTUBE`** (`@sidiswired`) — Story-driven edits, kinetic motion graphics, and channel packaging.
  2. **`PROJECT 02 · FREELANCE`** — Opens a dedicated **Freelance Archive Page** (`?page=freelance`) showcasing **37 designs** across **Posters & Key Visuals (28)**, **Thumbnails (6)**, and **Visiting Cards (3)** with category filters, live search, and a full-screen lightbox viewer.
  3. **`PROJECT 03 · TWITCH`** (`sidisfire`) — Gaming streams, live design sessions, edit breakdowns, custom stream graphics, and chill hangouts with chat.
- **Services & Playground** — Index-card service breakdown (*YouTube & Video Editing*, *Motion Graphics*, *Posters & Graphic Design*, *Creative Direction*) with one-click booking pre-fill, plus an interactive *Playground* sketchbook.
- **Direct-to-Inbox Inquiries** — Both the inline Airmail Postcard form and the Contact modal deliver project inquiries directly to `sidwcolab@gmail.com` via FormSubmit (with a `mailto:` fallback and one-click email copy).

---

## Work With Me / How to Reach Out

Open for freelance commissions, YouTube editing retainers, poster/cover art, thumbnail design, motion graphics, and creative direction collaborations.

| Platform | Handle / Link |
| --- | --- |
| **Portfolio & Inquiry Form** | [sidcolab.vercel.app](https://sidcolab.vercel.app) |
| **Email** | [sidwcolab@gmail.com](mailto:sidwcolab@gmail.com) |
| **YouTube** | [@sidiswired](https://www.youtube.com/@sidiswired) |
| **Instagram** | [@sidisfire](https://www.instagram.com/sidisfire/) |
| **X / Twitter** | [@sidbytess](https://x.com/sidbytess) |
| **Twitch** | [twitch.tv/sidisfire](https://www.twitch.tv/sidisfire) |
| **Discord** | `@realsidgod` |

When reaching out for a project, feel free to share:
- **What you need** (YouTube edit, motion graphics, poster/key visual, thumbnail, or creative direction)
- **Timeline / deadline**
- **Reference links or vibe** you're aiming for

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 6, Lucide Icons
- **Styling:** Custom CSS (`src/index.css`) with CSS multi-column masonry, clip-path folder tabs, and radial-gradient stamp perforations
- **Asset Pipeline:** Python + Pillow (`scripts/sync_freelance.py`) hooked into Vite (`vite.config.ts`)
- **Form Delivery:** FormSubmit AJAX endpoint (`src/utils/sendInquiry.ts`)
- **Hosting:** Vercel (`sidcolab.vercel.app`)

---

## Project Structure

```text
├── public/
│   ├── favicon.svg               # Custom pixel "S" badge favicon
│   └── freelance-gallery/        # Auto-generated WebP thumbnails & full previews
├── scripts/
│   └── sync_freelance.py         # Converts Freelance/ PNGs -> WebP + manifest
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky navigation + scroll progress bar
│   │   ├── HeroSection.tsx       # Pixel centerpiece, stickers & headline
│   │   ├── AboutSection.tsx      # Taped Polaroids, bio & stamp skill badges
│   │   ├── ServicesSection.tsx   # Index-card service offerings
│   │   ├── ProjectsSection.tsx   # Stacked YouTube, Freelance & Twitch folders
│   │   ├── FreelancePage.tsx     # Dedicated masonry gallery + lightbox viewer
│   │   ├── PlaygroundSection.tsx # Interactive studio widgets
│   │   ├── ContactSection.tsx    # Inline Airmail Postcard inquiry form
│   │   ├── ContactModal.tsx      # Quick contact modal + socials
│   │   ├── CaseStudyModal.tsx    # Detailed project & channel showcase modal
│   │   ├── SocialLinksGrid.tsx   # Shared social link & copyable handle pills
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── portfolioData.ts      # Centralized copy, links, services & projects
│   │   └── freelanceGallery.ts   # Auto-generated gallery manifest
│   └── utils/
│       └── sendInquiry.ts        # FormSubmit + mailto helper
└── vite.config.ts                # Vite config + Freelance folder watcher plugin
```

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (also watches Freelance/ for changes)
npm run dev

# 3. Manually re-sync Freelance/ images into WebP gallery assets (requires Python + Pillow)
npm run sync

# 4. Typecheck and build for production
npm run build
```

> **Note on `Freelance/` Assets:** Raw high-resolution source PNGs in `Freelance/` are excluded via `.gitignore` and `.vercelignore` to keep the repository and deployments lightweight, while web-optimized WebP assets in `public/freelance-gallery/` are served in production.
