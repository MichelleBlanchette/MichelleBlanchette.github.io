---
title: "Restored Crawler Discovery with Next.js Sitemap and Robots Metadata"
short: "Purple Turtle Creative’s `/sitemap.xml` was returning **404** while Cloudflare served a generic `robots.txt`—so I wired up first-class Next.js metadata routes to fix discovery."
---

While auditing Purple Turtle Creative’s new static site, I noticed search engines had almost no guidance: **`/sitemap.xml` returned 404**, and **`robots.txt` was Cloudflare’s default** rather than a sitemap pointer. That’s a silent SEO regression—especially ironic given how much crawl-budget work I’ve done on DentalPlans.com properties.

I opened [issue #28](https://github.com/PurpleTurtleCreative/website/issues/28) on our website repo and implemented App Router conventions—`app/sitemap.ts` to emit a build-time sitemap and `app/robots.ts` to advertise it. I also **`disallow`’d `/portal/`** so authenticated client areas stay out of the index while marketing pages remain fully crawlable.

The fix landed in commit [`44f2bd9`](https://github.com/PurpleTurtleCreative/website/commit/44f2bd98496854702a3c2eccb0216862cfa7bdc0). Crawlers now receive an explicit, stable map of public URLs again—restoring a basic requirement for organic discovery on a static Next.js deployment.
