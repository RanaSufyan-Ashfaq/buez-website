# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Buez marketing/landing website — a single-page React site (with one secondary route) for the Buez app, built with Vite. There is no backend in this repo; the only external integration is EmailJS for the beta-access request form. The site is mid-redesign to a Figma design called "BUEZ Landing Page Variant 2.0", being applied section by section against reference images supplied by the owner.

## Node version — critical

The system default `node` is **v14**, which cannot run Vite 7 or even modern npm. Every node/npm/vite command must use the nvm-installed Node 20 explicitly:

```bash
/Users/apple/.nvm/versions/node/v20.19.5/bin/node node_modules/.bin/vite        # dev server
/Users/apple/.nvm/versions/node/v20.19.5/bin/node node_modules/.bin/vite build  # production build to dist/
/Users/apple/.nvm/versions/node/v20.19.5/bin/node node_modules/.bin/eslint .    # lint
```

Invoke the binaries via `node <path>` as above — even Node 20's `npm` wrapper fails because its shebang resolves to the system node. `.claude/launch.json` already encodes this for the preview `dev` server. In an interactive shell, `nvm use 20` first also works.

## Commands

`package.json` scripts (`npm run dev/build/lint/preview`) work only under Node 20 (see above). There is no test suite. `tsconfig.json` exists but is editor-only (`noEmit`, non-strict) — it silences VS Code's "UMD global" / "cannot find module *.svg" errors; `.tsx` files are transpiled by Vite/esbuild without type-checking, so treat TypeScript as JSX-with-annotations, not a compiler-enforced contract. Files also keep an explicit `import React from "react"` by convention even though the automatic JSX runtime doesn't need it.

## Architecture

- **Entry point**: [src/main.jsx](src/main.jsx) wraps the app in `StrictMode` → MUI `ThemeProvider` (theme from [src/theme.js](src/theme.js), typography-only: Poppins) → `BrowserRouter` → `App`.
- **Routing**: [src/App.jsx](src/App.jsx) defines exactly two routes: `/` (the landing page, composed of section components in order: HeroSection, WhatIsBuez, HowBuezWorks, OurFeatures, WhyChooseBuez, PricingPlan, ExploreBuez, GetBetaVersion, FrequentlyAskQuestion) and `/apply-beta-access` (standalone form). `Header` and `Footer` render outside `Routes` so they persist. `App.jsx` is the only composition point — reorder/add sections there. `TryBuezFree.component.tsx` exists but is intentionally unregistered (dropped in the redesign; kept in case it returns).
- **Section components**: one folder per section under `src/components/<sectionName>/<Name>.component.tsx`.
- **Interactive section pattern**: `HowBuezWorks` (5-step coverflow: prev/next arrows, clickable numbered stepper, active image sharp / trailing images receding right with blur+scale via a `stackStyles` offset table) and `OurFeatures` (clickable feature list where the active item expands into a highlighted card and swaps the phone image + floating tooltip). Both are plain `useState` index cycling — follow this pattern rather than adding a carousel lib for new stepped sections. `ExploreBuez` is the exception: it predates the redesign and uses `react-slick`.
- **Single-page navigation**: `Header.component.tsx` implements in-page scrolling via anchor hashes (`#about`, `#ourFeatures`, `#whyBuez`, `#pricing`, `#exploreBuez`) matched to `id`s on section roots. When not on `/`, nav clicks navigate to `/` passing `{ scrollTo: hash }` via router state; `Header`'s `useEffect` performs the scroll and clears the state. Follow this pattern (not direct anchor hrefs) for new in-page links.
- **Beta access form**: [src/components/applyForBetaVersion/ApplyForBetaAccess.component.tsx](src/components/applyForBetaVersion/ApplyForBetaAccess.component.tsx) — Formik + Yup, `emailjs-com`, credentials from `import.meta.env.VITE_EMAILJS_*` (typed in [vite-env.d.ts](vite-env.d.ts), set in `.env`, not committed).
- **Shared UI**: [src/shared/GetBetaVersionButton.tsx](src/shared/GetBetaVersionButton.tsx) navigates to `/apply-beta-access` and takes an optional `label` prop (Header passes "Download App"; other usages default to "Get Beta Version"). Prefer `src/shared/` over duplicating controls.
- **Styling**: MUI `sx` props only; dark theme is hardcoded per-section (`background: "#020617"` base). Section-corner glows are made with a blurred solid circle (`::before`/`::after` pseudo-element: `borderRadius: 50%`, `background: rgba(47,128,181,1)`, `filter: blur(180px)`, positioned off-canvas at a corner, parent `overflow: hidden`) — **not** radial-gradients, which show a hard box edge. Adjacent sections place glows on facing corners so they blend across the seam.
- **Assets**: `src/assets/` mixes SVG icons and PNG phone-mockup screenshots imported as URLs (typed via [src/types/svg.d.ts](src/types/svg.d.ts)). Asset workflow: the owner exports from Figma and drops files in by name, then asks for them to be wired to a section — reuse the closest existing asset as a stand-in until then. SVG imports are URL strings, not components: render with `<Box component="img" src={TheImport}/>`, never `<TheImport/>` (that crashes the page with an InvalidCharacterError). `founder.svg` (hero) is ~4 MB and dominates the bundle; a PNG replacement like the other phones is the obvious optimization.
- **i18n scaffolding**: i18next packages are installed and `public/locales/{en,de}/` directories exist, but nothing is initialized and no component calls `useTranslation` — all copy is hardcoded English. Don't assume translations work.
