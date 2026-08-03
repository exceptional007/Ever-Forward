# Akshhat Srivastava Portfolio

A premium personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Motion One. The site showcases modern UI, smooth animations, and a polished experience that reflects the professional brand of a senior software and AI engineer.

## About

This portfolio is designed to feel handcrafted, minimal, and elegant while delivering strong performance and accessibility. It includes a hero section with the tagline:

**Unbroken. Unstoppable. Unfinished.**

## Features

- React 19 + TypeScript
- Vite-powered build and development workflow
- Tailwind CSS v4 with `@tailwindcss/vite`
- Motion One animations for smooth visual motion
- Lucide icons for a crisp UI
- Modular component architecture
- Responsive layout and modern glassmorphism styling
- Netlify-ready deployment using `dist` output
- `netlify.toml` redirect support for SPA routing

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion One
- Radix UI primitives
- Lucide React icons
- React Hook Form
- Recharts
- Sonner notifications
- ESLint + Prettier

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the portfolio.

### Build for production

```bash
npm run build
```

The production-ready output is generated to the `dist` folder.

### Preview production build

```bash
npm run preview
```

## Netlify Deployment

This project is configured for Netlify with the following settings in `netlify.toml`:

- `command = "npm run build"`
- `publish = "dist"`
- SPA redirect from `/*` to `/index.html`

Deploy by connecting the repository to Netlify or using the Netlify CLI.

## Project Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the app for production
- `npm run build:dev` — build the app in development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the codebase
- `npm run format` — format files with Prettier

## Project Structure

- `src/` — main source code
- `src/components/` — reusable UI components
- `src/components/layout/` — layout and navigation components
- `src/components/sections/` — portfolio sections
- `src/data/portfolio.ts` — profile and content data
- `src/lib/` — utility modules and motion helpers
- `public/` — static assets
- `vite.config.ts` — Vite configuration
- `netlify.toml` — Netlify deployment configuration

## Notes

- The site is optimized for performance and accessibility.
- Hero branding is centered on `Akshhat Srivastava`.
- The tagline is intentionally bold and memorable.

---

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
