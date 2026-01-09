# CC-YLSC Website

A simple Next.js site for Capital City Youth Leadership & Service Corps, hosted on Vercel.

## Features
- Home, About, Contact pages
- Jobs page driven by `data/jobs.json` (extracted from `LinkedIn Job List.docx`)
- Montserrat font, white/charcoal/LinkedIn-blue theme

## Project Structure
- `app/` – Next.js App Router pages and layout
- `public/` – Static assets (logo)
- `LinkedIn Job List.docx` – Place in repo root or `data/` folder (used for extraction)

## Getting Started

### Prerequisites
- Node.js 18+

### Install & Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

### Build
```bash
npm run build
npm start
```

## Jobs Content
Place your roles list at one of:
- `data/LinkedIn Job List.docx` (preferred)
- `LinkedIn Job List.docx` (repo root)

Then run the extractor to produce `data/jobs.json` used by the Jobs page:

```bash
npm install
node scripts/extract-jobs.mjs
npm run dev
```

You can also edit `data/jobs.json` directly.

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, import the project and select the repository.
3. Framework preset: Next.js (auto-detected).
4. Deploy. Vercel will run `npm install` and `npm run build`.

## Customization
- Update contact email in `app/contact/page.tsx`.
- Edit colors in `app/globals.css`.
- Update content in `app/page.tsx` and `app/about/page.tsx`.
