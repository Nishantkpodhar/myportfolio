# Nishant Kumar — Portfolio

> A motion-led frontend portfolio for **Nishant Kumar**, a Senior React.js Developer with 7+ years of experience building scalable, accessible web products.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=111827)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-Personal%20Portfolio-lightgrey)](./LICENSE)

![Portfolio preview](https://github.com/user-attachments/assets/3c4557e7-6392-4928-b8a9-7b2476ef4edd)

## Highlights

- Responsive, single-page portfolio with custom cursor and smooth navigation
- Scroll-driven GSAP animations, including a pinned horizontal project showcase on desktop
- Mobile-friendly project layout that switches to a vertical flow
- Interactive WebGL tech-stack scene built with React Three Fiber and Rapier physics
- Lazy-loaded 3D and tech-stack experiences to keep the initial page lighter
- Career timeline, services, social links, and contact section

## Built with

| Area | Tools |
| --- | --- |
| App | React 18, TypeScript, Vite |
| Motion | GSAP, ScrollTrigger, ScrollSmoother, `@gsap/react` |
| 3D | Three.js, React Three Fiber, Drei, Rapier, React Postprocessing |
| UI | CSS, React Icons, React Fast Marquee |
| Quality | ESLint, TypeScript |

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) **18.0+** (Node 20 LTS is recommended)
- npm (included with Node.js)
- Git, if you are cloning the repository

### Download / clone

```bash
git clone https://github.com/Nishantkpodhar/myportfolio.git
cd myportfolio
```

Alternatively, use **Code → Download ZIP** on GitHub, unzip the project, then open the extracted folder in your terminal.

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local address in the terminal—normally `http://localhost:5173`. Open it in a modern desktop browser for the full animated and 3D experience.

### Production build

```bash
npm run build
npm run preview
```

`npm run build` type-checks the project and creates an optimized production build in `dist/`. `npm run preview` serves that build locally for a final check.

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite development server, available to your local network. |
| `npm run build` | Runs TypeScript project builds and outputs an optimized `dist/` bundle. |
| `npm run preview` | Serves the already-built production bundle locally. |
| `npm run lint` | Runs ESLint across the project. |

## Project structure

```text
├── public/
│   ├── images/              # Portfolio previews, technology textures, character source
│   ├── models/              # GLB, HDR environment, and encrypted character resources
│   └── draco/               # Draco decoder files for compressed 3D assets
├── src/
│   ├── components/
│   │   ├── Character/       # Landing-page 3D character and scene utilities
│   │   ├── styles/          # Component styles
│   │   ├── Work.tsx         # Responsive, scroll-driven projects section
│   │   └── TechStack.tsx    # Interactive physics-based technology scene
│   ├── context/             # Loading state provider
│   ├── App.tsx              # Application composition and lazy loading
│   └── main.tsx             # Application entry point
├── index.html
├── vite.config.ts
└── package.json
```

## Customising your copy

The main portfolio content lives in small, focused components:

- Update the introduction and experience summary in `src/components/About.tsx`.
- Update career entries in `src/components/Career.tsx`.
- Update project information and screenshots in `src/components/Work.tsx` and `public/images/`.
- Update contact and social URLs in `src/components/Contact.tsx` and `src/components/SocialIcons.tsx`.
- Update visual styling through `src/index.css`, `src/App.css`, and `src/components/styles/`.

If you replace a 3D asset, keep its related model, HDR, and Draco resources in `public/` and verify the asset paths before building.

## Notes for deployment

- This is a static Vite site. Deploy the contents generated in `dist/` to any static host that supports SPA fallback (for example Vercel, Netlify, or GitHub Pages with the appropriate base-path configuration).
- The site loads local images and 3D assets from `public/`, so their paths begin with `/`. If deploying under a subdirectory, configure Vite's `base` option and update asset paths as needed.
- `gsap-trial` is included for development. GSAP trial/Club plugins have licensing restrictions; use officially licensed plugins or remove/replace them before a commercial production deployment. See the [GSAP installation documentation](https://gsap.com/docs/v3/Installation/).

## Browser support and performance

For the intended experience, use a current version of Chrome, Edge, Firefox, or Safari with WebGL enabled. The 3D tech-stack section is loaded only on desktop widths and pauses when it is outside the viewport to reduce rendering work. On smaller screens, the portfolio keeps the content accessible without that scene.

## License

This repository is provided under the [Personal Portfolio License (PPL) v1.0](./LICENSE). It is intended for learning and reference. Please read the license before reusing code, assets, or the visual design.

## Contact

- Email: [nishant.k.podhar@gmail.com](mailto:nishant.k.podhar@gmail.com)
- LinkedIn: [Nishant Kumar](https://www.linkedin.com/in/nishant-kumar-837105138)
- Repository: [Nishantkpodhar/myportfolio](https://github.com/Nishantkpodhar/myportfolio)
