# Mingrui Zheng — Academic Homepage V1

A trilingual (English / 中文 / 日本語), photo-free academic homepage built with Astro and deployed with GitHub Pages.

## What is included

- EN / 中文 / 日本語 synchronized routes
- Responsive dark/light UI
- Animated research constellation
- Research, publications, projects, experience, notes, and CV pages
- Publication filtering
- Individual publication pages + BibTeX copy
- Ctrl/Cmd + K command palette
- SEO metadata + sitemap + robots.txt
- GitHub Actions deployment
- No portrait/photo dependency

## 1. Required edits before publishing

Search the whole project for `YOUR_GITHUB_USERNAME` and replace it with your exact GitHub username.

Then edit:

- `src/data/profile.ts` — email, GitHub, Scholar, ORCID, CV PDF links
- `src/data/publications.ts` — publications
- `src/data/projects.ts` — research themes/projects
- `src/data/news.ts` — news
- `src/data/experience.ts` — education/experience

If you have PDF CV files, put them under `public/cv/` and set for example:

```ts
cvPdf: {
  en: '/cv/cv-en.pdf',
  zh: '/cv/cv-zh.pdf',
  ja: '/cv/cv-ja.pdf'
}
```

## 2. Local preview

Install Node.js 22 LTS, then:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (normally http://localhost:4321).

Before publishing:

```bash
npm run build
```

## 3. GitHub Pages deployment

Create a repository named exactly:

```text
YOUR_GITHUB_USERNAME.github.io
```

Push this project to the `main` branch.

Then on GitHub:

**Repository → Settings → Pages → Build and deployment → Source → GitHub Actions**

Every future push to `main` will automatically rebuild and deploy the website.

## 4. Update your site later

Most updates only require editing files in `src/data/`.

```bash
git add .
git commit -m "update publications"
git push
```

## 5. Design notes

The site intentionally avoids a portrait. Identity is carried by typography, the MZ monogram, research graph, structured research cards, and publication metadata.

