---
title: "Consolidated Cruise Line Pages into Canonical, Indexable Deals URLs"
short: "Thin pages out, strong pages in. I **pointed every cruise line's SEO signals at one deals URL** and kept unfinished pages out of the index. 🔎"
---

As cruise line, ship, and destination terms started syncing in from the itinerary API, TopCruiseDeals risked publishing hundreds of thin pages that search engines might index. Cruise line deals also lived at a URL that competed with the line's details page.

I moved each cruise line's deals to a clean `/cruise-deals/{line}/` URL with 301 redirects from legacy paths, then aligned canonical tags, Open Graph data, schema, titles, and a single shared breadcrumb trail with Yoast. I also added a custom sitemap dated by each line's newest deal, and gated detail pages, sitemap inclusion, and listing blocks on whether editors have actually written content for that term.

Synced terms remain useful for filtering, while only fully written pages are presented to search engines.
