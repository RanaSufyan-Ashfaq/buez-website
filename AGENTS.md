# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project

Buez marketing/landing website — a single-page React site (with one secondary route) for the Buez app, built with Vite. There is no backend in this repo; the only external integration is EmailJS for the beta-access request form.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # eslint .
```

There is no test suite and no `tsconfig.json` in this repo — `.tsx` files are transpiled by Vite/esbuild but not type-checked, so `tsc` is not part of the workflow. Treat TypeScript here as JSX-with-annotations, not a compiler-enforced contract.

## Architecture

- **Entry point**: [src/main.jsx](src/main.jsx) wraps the app in `StrictMode` → MUI `ThemeProvider` (theme from [src/theme.js](src/theme.js)) → `BrowserRouter` → `App`.
- **Routing**: [src/App.jsx](src/App.jsx) defines exactly two routes: `/` (the full landing page, composed of section components rendered in order) and `/apply-beta-access` (a standalone form page). `Header` and `Footer` are rendered outside `Routes` so they persist across both.
- **Section components**: each landing-page section lives in its own folder under `src/components/<sectionName>/<Name>.component.tsx` (e.g. `heroSection`, `whatIsBuez`, `ourFeatures`, `whyChooseBuez`, `tryBuezFree`, `pricingPlan`, `exploreBuezInterface`, `getBetaVersion`, `faq`). `App.jsx` is the only place these are composed together — to reorder or add a landing section, edit the `Route` for `/` there.
- **Single-page navigation**: `Header.component.tsx` implements in-page scrolling via anchor hashes (`#about`, `#ourFeatures`, etc.) matched to `id`s on the section components. When not on `/`, clicking a nav item navigates to `/` and passes `{ scrollTo: hash }` via router state; `Header`'s `useEffect` picks this up on mount and performs the scroll, then clears the history state. Follow this pattern (not direct anchor hrefs) for any new in-page links, since react-router intercepts navigation.
- **Beta access form**: [src/components/applyForBetaVersion/ApplyForBetaAccess.component.tsx](src/components/applyForBetaVersion/ApplyForBetaAccess.component.tsx) is the reference pattern for forms — Formik + Yup for state/validation, `emailjs-com` for submission, reading credentials from `import.meta.env.VITE_EMAILJS_*` (declared in [vite-env.d.ts](vite-env.d.ts), set in `.env`, not committed).
- **Shared UI**: [src/shared/GetBetaVersionButton.tsx](src/shared/GetBetaVersionButton.tsx) is reused in both the header and its mobile drawer — prefer adding to `src/shared/` over duplicating buttons/controls used in more than one section.
- **Styling**: MUI `sx` props and the shared theme are the primary styling mechanism; [src/App.css](src/App.css) and [src/index.css](src/index.css) hold global/base styles. There is no CSS-in-JS theming beyond `theme.js` (currently just typography/font-family).
- **Assets**: SVGs live in `src/assets/` and are imported directly as React components/URLs (typed via [src/types/svg.d.ts](src/types/svg.d.ts)).
- **i18n scaffolding**: `i18next`, `react-i18next`, `i18next-browser-languagedetector`, and `i18next-http-backend` are installed and `public/locales/en/` and `public/locales/de/` directories exist, but no i18n initialization or translation files exist yet and no component calls `useTranslation` — localization is planned but not wired up. Don't assume translated strings work; components currently use hardcoded English text.
