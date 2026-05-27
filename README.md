# Pratik Sapkota — Portfolio

A one-of-a-kind animated portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

### 1. Install Node.js (one-time)

You need Node.js to run the site. Install it from [nodejs.org](https://nodejs.org) (LTS version), or via Homebrew:

```bash
brew install node
```

Verify:

```bash
node -v
npm -v
```

### 2. Install dependencies

```bash
cd Portfolio
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Portfolio/
├── src/
│   ├── app/              ← Pages & global layout
│   │   ├── layout.tsx    ← Wraps every page (fonts, background)
│   │   ├── page.tsx      ← Homepage (lists all sections)
│   │   └── globals.css   ← Colors, animations, theme
│   ├── components/       ← UI building blocks
│   │   ├── Hero.tsx      ← Landing section
│   │   ├── About.tsx     ← About section
│   │   └── ...
│   └── data/
│       └── portfolio.ts  ← ⭐ EDIT YOUR CONTENT HERE
├── public/
│   └── resume/           ← Your CV PDF lives here
└── HOW-TO-EDIT.md        ← Detailed editing guide
```

## Deploy (free)

Push to GitHub, then connect the repo at [vercel.com](https://vercel.com). Vercel auto-detects Next.js.

## Tech Stack

- [Next.js 15](https://nextjs.org) — React framework with file-based routing
- [Tailwind CSS 4](https://tailwindcss.com) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Scroll & hover animations
- [Lucide](https://lucide.dev) — Icons
