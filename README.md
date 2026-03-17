# Ghulam Mustafa — Portfolio

A modern, minimal developer portfolio built with Next.js and Tailwind CSS featuring smooth animations and a dark theme.

**Live:** [myportfoliowebsite-cyan.vercel.app](https://myportfoliowebsite-cyan.vercel.app)

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React Icons**

## Features

- Dark theme by default
- Smooth scroll-triggered animations
- Responsive design (mobile + desktop)
- Project cards with screenshots, tech stack badges, and links
- Skills section with icon badges
- Contact section with GitHub, LinkedIn, and Email links

## Sections

- **Hero** — Profile picture, name, title, and tagline
- **About** — Short bio
- **Projects** — Project cards with description, tech stack, GitHub & live demo links
- **Skills** — Python, FastAPI, Next.js, Streamlit, Agents SDK, Git, Docker, Kubernetes
- **Contact** — GitHub, LinkedIn, Email

## Adding a New Project

Edit `src/data/projects.ts` and add an object:

```ts
{
  title: "Project Name",
  description: "What it does...",
  techStack: ["Python", "FastAPI"],
  github: "https://github.com/...",
  liveDemo: "https://...",       // optional
  image: "/screenshot.png",      // optional, place in public/
}
```

## Run Locally

```bash
git clone https://github.com/ghulammustafa119/my_portfolio_wbsite.git
cd my_portfolio_wbsite
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

Deployed on [Vercel](https://vercel.com). Auto-deploys on every push to `main`.
