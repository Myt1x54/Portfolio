# Abdul Moiz — Developer Portfolio

An interactive, dark/neon + terminal-themed portfolio built with **React + Vite**.

## Features

- 🖥️ Terminal-style hero with typewriter effect
- 🗂️ **Project filtering** by category (Mobile, Backend, Desktop, Games, DSA & Systems, Networking)
- 🔎 Expandable project cards with per-project highlights
- 🌟 Scroll-reveal animations, responsive layout, mobile nav

## Run locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy. `vercel.json` handles SPA routing.

## Editing content

All CV content lives in [`src/data/portfolio.js`](src/data/portfolio.js) — update projects,
skills, education, and your **GitHub / LinkedIn URLs** (currently placeholders) there.
