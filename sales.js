# DISCIPL Screens — Website

A minimal, single-purpose static website: a home page plus three sub-pages
(**Our Screens**, **Pricing**, **Sales**). No build step, no framework —
just plain HTML/CSS/JS, so it deploys to Vercel as-is.

## What's in this folder

```
discipl-site/
├── index.html       ← Home page (logo, 3 nav tiles, 4 "why us" points)
├── screens.html      ← Our Screens page (lists all gym locations)
├── pricing.html      ← Pricing page (interactive quote builder)
├── sales.html        ← Sales page (lead capture form)
├── style.css          ← All styling for every page (one shared file)
├── data.js            ← The list of 15 gym screens — edit this to add/remove screens
├── config.js          ← WhatsApp number + JSONBin.io credentials
├── pricing.js         ← Pricing calculator logic
├── sales.js           ← Sales form submit logic
├── vercel.json        ← Tells Vercel to serve clean URLs (/pricing, not /pricing.html)
└── assets/
    └── logo.png       ← Your DISCIPL Screens logo
```

Everything is already filled in and working — your WhatsApp number and your
JSONBin.io credentials are already set inside `config.js`. You don't need to
edit or paste anything yourself. Just upload this folder to GitHub and
import it into Vercel (steps below).

**One thing worth checking on JSONBin's side:** log into jsonbin.io and make
sure your bin's content is currently `[]` (an empty array) before your first
lead comes in — that's the starting state the Sales form expects to append
new leads to.

> Note: because this is a static site, the JSONBin master key is visible in
> the browser's page source. That's fine for a low-volume internal lead
> form, but don't reuse that same bin/key anywhere sensitive.

## Editing content later

- **Add/remove a gym screen** → edit the array in `data.js`. Each line is
  `{ name: "...", locality: "..." }`. The Screens page re-renders itself
  from this file automatically.
- **Change the 4 "why us" points** → edit the `.why-item` blocks directly
  in `index.html`.
- **Change pricing floor/ceiling** → edit `BASE_RATE` (₹2,500) and
  `FLOOR_RATE` (₹600) at the top of `pricing.js`. The curve automatically
  recalculates every rate in between.
- **Swap the logo** → replace `assets/logo.png` with a new file of the same
  name.

## How the pricing curve works

The brief you gave: ₹2,500/screen/month at the smallest booking (1 screen,
1 month), sliding down to ₹600/screen/month at the largest booking (15
screens × 12 months = ₹1,08,000 total). `pricing.js` computes a rate based
on total "screen-months" (screens × months) on a logarithmic curve between
those two anchor points — so committing to **either** more screens or more
months brings the rate down, not just one or the other.

## Uploading to GitHub (no command line needed)

1. Unzip `discipl-site.zip` on your computer — you'll get a `discipl-site`
   folder containing the files listed above.
2. Go to [github.com](https://github.com) → log in → click the **+** in
   the top right → **New repository**.
3. Give it a name (e.g. `discipl-site`), leave everything else default,
   and click **Create repository**.
4. On the new repo's page, click **"uploading an existing file"** (a link
   in the quick-setup box).
5. Drag every file and the `assets` folder from your unzipped
   `discipl-site` folder into the upload area — all of it at once is fine.
6. Scroll down and click **Commit changes**.

That's your GitHub repo done — no git commands required.

## Importing into Vercel

1. Go to [vercel.com](https://vercel.com) → sign up / log in (you can use
   your GitHub account to log in, which also makes this next step easier).
2. Click **Add New… → Project**.
3. Under **Import Git Repository**, find and select the repo you just
   created (you may need to click **Adjust GitHub App Permissions** and
   grant Vercel access to it the first time).
4. Leave the settings on their defaults — **Framework Preset: Other**,
   Build Command and Output Directory left blank/default — since this is
   a plain static site with no build step.
5. Click **Deploy**.
6. In under a minute you'll get a live link like
   `discipl-site.vercel.app` — that's your site, live.

**Custom domain (optional):** in your Vercel project → **Settings →
Domains**, you can attach your own domain (e.g. `disciplscreens.com`)
instead of the default `.vercel.app` one.

**Future edits:** any time you edit a file directly on GitHub (or upload a
replacement) and commit the change, Vercel automatically redeploys the live
site within a minute or two — nothing else to do.
