# PetSage Marketing Site (Next.js + Vercel)

Production-ready marketing website for **PetSage** (AI-powered pet wellness companion), built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

Current waitlist implementation: **Google Forms link-out** (no backend / no env vars required).

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Editable Content (single file)
All copy lives in:
- `content/siteContent.ts`

Update text there without touching component code.

## Local Development
Prereqs:
- Node.js 18+ (recommended 20+)

1) Install deps:
   - `npm install`
2) Run:
   - `npm run dev`

Open `http://localhost:3000`.

## Waitlist (Google Forms)
The “Join the Waitlist” CTA links to the external form URL:
- `content/siteContent.ts` → `waitlist.externalFormUrl`

To export waitlist entries, use Google Forms → Responses → open in Sheets → download CSV.

## (Optional) Waitlist API (not used when Google Forms is enabled)
This repo still contains API routes for a server-side waitlist. The UI does **not** call them as long as `waitlist.externalFormUrl` is set.

### Enroll (public)
- `POST /api/waitlist`
- Body: `{ "email": "you@example.com" }`
- Stores email + timestamp in a KV/Redis backend (requires env vars).

Example:
```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H 'content-type: application/json' \
  -d '{"email":"you@example.com"}'
```

### Export CSV (admin)
- `GET /api/waitlist/export`
- Requires header: `x-admin-token: <ADMIN_TOKEN>`

Example:
```bash
curl -L http://localhost:3000/api/waitlist/export \
  -H "x-admin-token: $ADMIN_TOKEN" \
  -o petsage-waitlist.csv
```

## Deploy to Vercel
1) Push this repo to GitHub (or import into Vercel).
2) Deploy.

If you later enable the API-based waitlist/export endpoints, add env vars:
- `ADMIN_TOKEN` (required for `GET /api/waitlist/export`)
- KV/Redis provider env vars required by your chosen backend

## Notes
- This repo includes legacy static HTML files (`index.html`, `privacy.html`, `delete-account.html`) that are not used by Next.js.
