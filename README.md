# ServeNaija Landing Page

The public landing site for **ServeNaija** — Africa's trusted digital marketplace for shopping, booking verified professionals, and discovering businesses across Nigeria.

Built with **React 19 + TypeScript + Vite**, styled with plain CSS (design tokens in `App.css`), icons via **lucide-react**, and routing via **react-router-dom**.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Environment Variables](#environment-variables)
3. [Available Scripts](#available-scripts)
4. [Project Structure](#project-structure)
5. [Pages & Routes](#pages--routes)
6. [Key Features](#key-features)
7. [Backend API](#backend-api)
8. [SEO & Search Indexing](#seo--search-indexing)
9. [Deployment](#deployment)
10. [Coding Conventions](#coding-conventions)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build (type-checks first, outputs to dist/)
npm run build

# 4. Lint
npm run lint
```

> **Note:** the dev server proxies `/api/*` to a backend at `http://localhost:7227/v1` by default (see [Environment Variables](#environment-variables)). Without a backend running, pages still render — API-driven sections handle empty/error states gracefully in the UI.

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed:


VITE_API_URL=https://api.your-domain.com
```

`.env` contains secrets/overrides and is **git-ignored** — never commit it.

## Available Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with HMR + `/api` proxy |
| `npm run build` | `tsc -b` type-check → `vite build` → copies `404.html` for SPA hosting |
| `npm run lint` | ESLint over the repo |
| `npm run preview` | Serves the production build locally |

## Project Structure

```
├── api/                        # (production /api/*)
│   ├── _lib/store.ts           #   shared handlers, seed data, HTTP helpers
│   ├── products.ts  services.ts  businesses.ts  contact.ts  leads.ts
├── public/
│   ├── robots.txt              # crawler rules (blocks /forgot-password, /reset-password)
│   ├── sitemap.xml             # all indexable pages
│   └── favicon.svg  icons.svg  _redirects
├── scripts/copy-404.mjs        # copies index.html → 404.html for SPA fallback
├── src/
│   ├── components/
│   │   ├── layout/             # Header (top nav), Footer
│   │   ├── SEO.tsx             # per-page meta tag manager (see SEO section)
│   │   ├── CategoriesModal.tsx # searchable "all categories" modal
│   │   ├── DownloadAppModal.tsx
│   │   ├── SectionFive.tsx     # FAQ section
│   │   └── index.ts            # barrel exports
│   ├── context/                # DownloadAppContext (global modal state)
│   ├── lib/api.ts              # API client + backend→UI data transformers
│   ├── pages/                  # one file per route (see table below)
│   ├── types.ts                # shared TypeScript types
│   ├── App.tsx                 # router + layout
│   ├── App.css  pages.css      # styles (BEM-ish class naming)
│   └── main.tsx
└── vite.config.ts              # react plugin + /api dev proxy
```

## Pages & Routes

| Route | Page file | SEO title |
|---|---|---|
| `/` | `pages/landingpage.tsx` | Home |
| `/marketplace` | `pages/Marketplace.tsx` | Marketplace |
| `/services` | `pages/Services.tsx` | Book Services |
| `/businesses` | `pages/Businesses.tsx` | Verified Businesses |
| `/agents` | `pages/Agents.tsx` | Become an Agent |
| `/about` | `pages/About.tsx` | About Us |
| `/contact` | `pages/Contact.tsx` | Contact Us |
| `/terms` | `pages/Terms.tsx` | Terms and Conditions |
| `/privacy` | `pages/Privacy.tsx` | Privacy Policy |
| `/refund-policy` | `pages/RefundPolicy.tsx` | Refund Policy |
| `/delete-account` | `pages/DeleteAccount.tsx` | Delete Account |
| `/forgot-password` | `pages/ForgotPassword.tsx` | Forgot Password |
| `/reset-password` | `pages/ResetPassword.tsx` | Reset Password |

## Key Features

### Magic-link password reset
1. **`/forgot-password`** — the user submits their email; the frontend calls `POST /auth/send-magic-link` (`src/lib/api.ts`). The backend looks the user up in the Customer *and* Provider collections and emails a signed link:
   `{FRONTEND_URL}/reset-password?token=…&email=…&type=customer|provider`
2. **`/reset-password`** — reads `token`, `email` and `type` from the URL, validates password + confirmation (min 8 chars, must match), then calls `POST /auth/reset-password`. On success it shows a confirmation and redirects to the home page after 3 seconds.
3. To avoid account enumeration, the backend always answers "if an account exists, you will receive a magic link" even when the email is unknown.

### Service categories (6 + modal)
- The Services page renders only the **first 6 categories** in its grid.
- A **"View all X categories"** button opens `CategoriesModal` — a searchable, keyboard-friendly modal (Escape closes, body scroll locks, click-outside closes) listing every remaining category.
- Category icons are **lucide-react** components, chosen by a name-based matcher in `transformCategory()` (`src/lib/api.ts`) — e.g. *Plumbing → Wrench*, *Solar Installation → BatteryCharging*, *Legal → Scale*. The backend's generic `"Zap"` icon default is intentionally ignored; unmatched categories fall back to a neutral `LayoutGrid` icon.

### Download-app modal
A global modal (store badges + app highlights) driven by `DownloadAppContext`. Every CTA that leads to the app — nav button, hero badges, section CTAs — calls `openDownloadApp()` from `useDownloadApp()`.

## Backend API

Two backends serve this frontend:

**A. Bundled demo API** (`/api/*`) — Vite middleware in dev. In-memory storage, seed data in `api/_lib/store.ts`:

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/products?category=` | GET | Marketplace products (optional category filter) |
| `/api/services` | GET | Service categories + professionals |
| `/api/businesses` | GET | Verified businesses |
| `/api/contact` | POST | Contact form messages (`{ name, email, topic, message }`) |
| `/api/leads` | POST | Conversion tracking (`{ type, label? }`) |

**B. Auth backend** — the magic-link/reset endpoints (`/auth/send-magic-link`, `/auth/reset-password`) live on the separate auth service, reached through the same `/api` proxy/rewrite chain.

- **Local dev:** `vite.config.ts` proxies `/api/*` to `VITE_API_URL` (default `http://localhost:7227/v1`), stripping the `/api` prefix.

- All responses are transformed in `src/lib/api.ts` (`transformProduct`, `transformCategory`, …) so pages never depend on raw backend shapes.
- The demo storage is in-memory — replace the seed arrays and push calls in `api/_lib/store.ts` with real database queries when ready.

## SEO & Search Indexing

Everything is in place — each page manages its own metadata:

- **`src/components/SEO.tsx`** — a small component rendered at the top of every page. Props: `title`, `description`, `keywords`, `canonicalUrl`, `ogImage`, `ogType`. It updates `document.title`, meta description/keywords, canonical link, Open Graph and Twitter Card tags on mount.
- **`index.html`** — static defaults + **JSON-LD structured data** (`Organization` + `WebSite`) for rich results.
- **`public/robots.txt`** — allows all crawlers, disallows the two password pages, points to the sitemap.
- **`public/sitemap.xml`** — lists all 11 public pages with priorities.
- Canonical URLs assume the production domain **`https://servenaija.com`** (`SITE_URL` in `SEO.tsx`). If the domain changes, update it there, in `robots.txt` and in `sitemap.xml`.

### Going live with search engines
1. Deploy to the real domain (must be reachable over HTTPS).
2. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)): add the property, verify via DNS TXT or HTML file, submit `https://servenaija.com/sitemap.xml` under *Sitemaps*, then use *URL Inspection → Request Indexing* for the homepage.
3. **Bing Webmaster Tools** ([bing.com/webmasters](https://www.bing.com/webmasters)): import the verified site from Search Console in one click and submit the same sitemap.
4. Indexing typically takes days to a few weeks.

> **Caveat:** per-page tags are set client-side. Google renders JavaScript and reads them fine, but some minor crawlers only see the static `index.html` defaults. For full coverage on every crawler, consider prerendering (e.g. `vite-plugin-prerender`) or migrating to Next.js later.

## Deployment

The site deploys to  with zero config:

- `npm run build` produces `dist/` (plus `404.html` copied by `scripts/copy-404.mjs`).
  - `/(.*)` → `/index.html` (SPA client-side routing)
- Serverless functions in `api/*.ts` deploy automatically.
- The SPA fallback (`404.html` / `_redirects`) keeps deep links like `/services?category=Plumbing` working on static hosts.

## Coding Conventions

- **TypeScript strict** — no `any`; shared types live in `src/types.ts`.
- **Default exports** for pages, named exports through barrel files (`components/index.ts`).
- **CSS** — plain CSS files (no CSS-in-JS); BEM-ish class prefixes per section (`.sv-` Services, `.ag-` Agents, `.ab-` About, `.rp-` reset password, `.dl-modal__` download modal). Brand green: `#0e7a4a`.
- **Icons** — lucide-react components only; avoid emoji in UI (a name→icon matcher in `api.ts` replaces backend emoji fields).
- **API access** — always through `src/lib/api.ts`; pages never call `fetch` directly.
- **Metadata** — every new page renders `<SEO … />` with a unique title/description and gets added to `sitemap.xml`.
