# Vite + React + Tailwind Demo (Task + API)

This repository is a demo application built with Vite, React, and Tailwind CSS. It demonstrates component architecture, state management with hooks, context-based theming, custom hooks (localStorage persistence), client-side API integration (JSONPlaceholder), routing, and responsive styling.

## Features implemented (mapping to assignment)
- Task 1: Vite React app, Tailwind configured, server runs on port 5173 by default (or use PORT env).
- Task 2: Reusable components (Button, Card, Navbar, Footer, Layout) and `products`-like resource (Task items).
- Task 3: TaskManager using useState, useEffect, useContext (theme), custom hook `useLocalStorage`.
- Task 4: API integration: Posts page fetches JSONPlaceholder posts with loading/error state, search, and pagination.
- Task 5: Responsive UI using Tailwind and a theme switcher (light/dark) via context.

---

## Quickstart (Windows / macOS / Linux)

1. Install Node.js (v18+ recommended)

2. Clone your repo and change directory:
```bash
git clone <your-repo-url>
cd <repo-folder>
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```
Open the printed dev URL (usually http://localhost:5173).

---

## Project structure
- `index.html` — Vite entry
- `src/main.jsx` — React entry
- `src/App.jsx` — Routes configuration
- `src/layouts` — Layout (Navbar + Footer)
- `src/components` — Reusable UI components and TaskManager
- `src/pages` — Top-level pages (Home, Posts, About)
- `src/context` — Theme context (light/dark)
- `src/hooks` — Custom hooks (useLocalStorage)
- `tailwind.config.cjs` and `postcss.config.cjs` — Tailwind setup

---

## Tailwind / Styling
- Dark mode uses the `class` strategy. Toggle theme from the Navbar. The app writes `dark` class to the document root.
- Styles live in `src/index.css`.

---

## Testing the app (manual)
- Home page: add tasks, mark complete, filter tasks, delete. Tasks persist to localStorage.
- Posts page: fetches posts, supports search and simple pagination.
- Theme switch: toggle light/dark in Navbar.

---

## Deployment
- Build the app:
```bash
npm run build
```
- Deploy `dist/` to Vercel, Netlify, GitHub Pages, or any static host. For Vercel: `vercel` or connect to repository in Vercel UI.

---

## Notes & next steps
- The app currently uses an in-memory / localStorage-backed store for tasks and client-side fetching for posts. For production or extended assignments, swap Task storage with an API/backend and add authentication.
- You can extend accessibility, add unit tests, and refine animations.

---

If you want, I can also:
- Provide step-by-step Windows PowerShell commands to create the file structure automatically.
- Add example screenshots or a deployed URL.
- Add ESLint/Prettier configs.

```