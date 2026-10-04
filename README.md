# ajaywaghray.com

Source for [ajaywaghray.com](https://ajaywaghray.com), the personal site of Ajay Waghray, a product leader based in Austin, Texas.

It's a single-page site built with:

- [Vite](https://vitejs.dev/)
- React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Local development

Requires Node.js 20+ and npm.

```sh
npm ci          # install dependencies
npm run dev     # start the dev server at http://localhost:8080
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

Page sections live in `src/components/` (Hero, About, Impact, Projects, Awards, Contact, Footer) and are assembled in `src/pages/Index.tsx`.

## Deploys

The site is hosted on **GitHub Pages** and deploys automatically:

1. Push (or merge) to `main`.
2. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) GitHub Actions workflow runs `npm ci` and `npm run build`, copies `dist/index.html` to `dist/404.html` (SPA fallback), and uploads `dist/` as the Pages artifact.
3. The `deploy` job publishes it to GitHub Pages.

You can also trigger a deploy manually from the **Actions** tab ("Run workflow"), or with `gh workflow run deploy.yml`.

The custom domain is set by `public/CNAME` (`ajaywaghray.com`), which is copied into the build output, and in the repo's **Settings → Pages**.

## Contact

The contact section uses a plain `mailto:contact@ajaywaghray.com` link; no form backend or third-party service is involved.
