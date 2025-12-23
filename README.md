# We The People: Florida

A mobile-first, Florida-only civic snapshot built with Next.js (App Router), TypeScript, and Tailwind CSS. Everything runs client-side with mock data — no logins, no backend.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000 in your browser.

## Deploying to Vercel

1. Push this repo to your Git provider.
2. In Vercel, create a new project and import the repo.
3. Ensure the **Root Directory** points to the repo root (the folder that contains `package.json`).
4. Keep the default build command (`next build`) and output (`.next`).
5. Deploy — the App Router + Tailwind setup works without extra configuration.

## What this MVP includes
- Landing page with quick entry to county selection or a Leon County demo.
- County selector with search filtering and navigable county cards.
- County home with four tabs: Officials, Legislation, Budget, and Community.
- Clickable rows/cards open detail modals (or drawers on mobile) for officials, legislation, and community posts.
- Mock budget breakdown with total and category amounts derived from percentages.
- Disabled “Create Post” button with tooltip to show future social features.
- Accessible modals (Esc to close, backdrop click) and keyboard-friendly tab navigation.
- Mock data stored locally in `src/data/florida.ts` with typed records.

## What’s next
- Add live data sources and APIs for officials, legislation, and budgets.
- Enable account creation and posting with moderation tools.
- Map-based county selection and location detection (opt-in).
- Spanish/Creole localization and accessibility audits with real screen reader testing.

## Quick click test checklist
- On `/`, click **Enter Florida** and **Explore Demo (Leon County)** — both should load.
- On `/select-county`, search for “Leon” and tap the card to open its county home.
- On a county page, switch tabs and open an official, legislation item, and community post to see modals.
- On the Budget tab, confirm totals and category amounts show correctly.
- Hover the disabled **Create Post** button to see the “Posting in MVP is coming soon” tooltip.

## License

[MIT](./LICENSE)
