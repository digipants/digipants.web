# Bhupendra — Personal Site (Next.js, Tailwind, Motion)

- **URL path**: https://digipants.com/bhupendra
- **Email**: bhupendra@digipants.com
- **Tech**: Next.js 14 (App Router) + Tailwind + Framer Motion + Lucide icons
- **Hosting**: Netlify (static export) or any static host

## Local setup

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000/bhupendra
```

## Build & Export (static)

```bash
pnpm build && pnpm export
# output in ./out (with /bhupendra basePath)
```

## Netlify build settings

- **Build command**: `npm run build && npm run export`
- **Publish directory**: `out`

If `digipants.com` is already on Netlify and you want this at `/bhupendra` on the **main site**:

1. Deploy this site as a **separate Netlify site** (it will have its own `*.netlify.app` URL).
2. In your **main** site’s repo, add a rewrite in `_redirects`:

```
/bhupendra/*  https://YOUR-BHUPENDRA-SITE.netlify.app/:splat  200
```

This proxies `digipants.com/bhupendra/*` to the sub‑site while preserving the path.

If your main site is **not** on Netlify, you can also upload `out/bhupendra` to your current host at `/bhupendra`.

## Form handling

The contact form uses `mailto:`. To use Formspree:

- Create a Formspree form, get the endpoint URL.
- Replace the form `onSubmit` with a `fetch` POST to that endpoint.

```ts
// inside onSubmit handler
fetch("https://formspree.io/f/yourid", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: fd.get("name"),
    email: fd.get("email"),
    project: fd.get("project"),
    budget: fd.get("budget"),
    timeline: fd.get("timeline"),
    message: fd.get("message"),
  }),
}).then(() => alert("Thanks! I’ll reply within 24 hours."));
```
