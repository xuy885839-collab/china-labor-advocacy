# CHINA LABOR ADVOCACY — Official Website

Bilingual (简体中文 + English) nonprofit website for **CHINA LABOR ADVOCACY**  
Flushing, NY · EIN **42-2894065** · U.S. **501(c)(3)** public charity under **170(b)(1)(A)(vi)**  
Tax-exempt effective **June 2, 2026** · IRS determination **September 2, 2026**

> Not affiliated with China Labor Watch.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS**

## Local development

```bash
cd china-labor-advocacy
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — defaults to `/zh`; English at `/en`.

```bash
npm run build   # production build
npm start       # serve the build
```

## Project structure (high level)

```
src/app/[locale]/     # Home, About, Laws, News, Media, Cases,
                      # Legal Aid, Join, Contact, Video,
                      # Sweatshop Watchlist, Employee-Satisfied, Donate
src/app/api/          # Contact + Join form endpoints
src/components/       # Header, Footer, forms, UI
src/lib/dictionaries/ # zh + en copy
src/middleware.ts     # locale redirect (default zh)
```

## Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Import the repo at [https://vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy. Set a custom domain (e.g. `chinalaboradvocacy.org`) in Project → Settings → Domains.
5. Optional env vars later: email provider keys, payment (Stripe/PayPal), CMS tokens.

## Push to GitHub

Target remote: `https://github.com/xuy885839-collab/china-labor-advocacy`

```bash
cd china-labor-advocacy
git init
git add .
git commit -m "Initial bilingual nonprofit site for China Labor Advocacy"
git branch -M main
git remote add origin https://github.com/xuy885839-collab/china-labor-advocacy.git
git push -u origin main
```

If the GitHub repo already has commits, use `git pull --rebase origin main` before the first push, or follow GitHub’s “push an existing repository” instructions.

**ZIP upload alternative:** use `china-labor-advocacy-src.zip` (excludes `node_modules`, `.next`, `.git`), unzip locally, then run the git commands above.

## Forms & donations

- **Contact** → `POST /api/contact` (validates + logs; wire to email/CRM in production).
- **Join (member/volunteer)** → `POST /api/join` (pending-review stub; member DB / QR dues deferred).
- **Donate** shows 501(c)(3) notice; online payment marked **coming soon**.

## Deferred CMS features (from requirements)

- Full CMS with section editors / volunteer roles
- Article comments with admin on/off
- Self-hosted video upload/transcode
- Member review workflow + payment QR after approval
- Live donation processors & financial disclosure feed

Sample editorial content is clearly labeled **示例内容 / Sample content**.

## Contact

Hui Jian · `contact@chinalaboradvocacy.org` · Flushing, NY  
(No public phone number.)
