# Pulse Pricing

Single-page SaaS pricing site for Pulse with a hero, three-tier pricing table (Free / Pro / Enterprise), comparison grid, testimonials, and FAQ. Dark theme with a cyan accent.

This repository currently includes the frontend application (Next.js 14 + TypeScript + Tailwind CSS).

## Getting started

Prerequisites:
- Node.js >= 18.17
- npm (or pnpm/yarn)

Install dependencies:

```bash
cd frontend
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

## Project structure (relevant parts)

- frontend/
  - package.json — project metadata and scripts
  - src/app/page.tsx — the pricing page UI

Additional configuration files (Next.js config, Tailwind setup, global styles, layout) are added in subsequent batches.

## Design notes

- Dark canvas with a cyan accent for interactive elements and highlights.
- Clear type scale with bold headings and comfortable body text.
- Responsive layout with a max-width container and generous spacing.
- Accessible components with proper semantics and focus states.

## License

MIT
