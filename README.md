# santoshgajje.dev

Portfolio site — React 19 + TypeScript + Vite. Plain CSS, no runtime dependencies beyond React.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then outputs ./dist
```

## Deploy to Cloudflare Pages
**Git (recommended):** push to GitHub → Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
Build command `npm run build`, output directory `dist`, framework preset "Vite".

**Direct upload:** `npm run deploy` (uses `npx wrangler pages deploy dist`; run `npx wrangler login` once).

**Custom domain:** Pages project → Custom domains → add `santoshgajje.dev` (and `www.santoshgajje.dev`).
If the domain's DNS is on Cloudflare this is one click. `.dev` is HTTPS-only, which Pages handles.

## Edit content
Everything lives in `src/data.ts` (use `**bold**` to emphasise figures). Styling is in `src/styles.css`.
Security headers and caching rules are in `public/_headers`.
