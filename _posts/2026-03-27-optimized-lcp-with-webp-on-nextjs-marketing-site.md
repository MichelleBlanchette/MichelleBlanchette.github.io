---
title: "Improved Largest Contentful Paint with WebP Hero Imagery on Next.js"
short: "While hardening Purple Turtle Creative’s new static homepage, I converted hero artwork to **WebP** and tightened image delivery to protect LCP on a fully static export."
---

The Purple Turtle Creative marketing site relaunch prioritized fast first impressions: App Platform serves static HTML, so **every byte in the hero matters** for Largest Contentful Paint.

While polishing the homepage ([commit `0544188`](https://github.com/PurpleTurtleCreative/website/commit/05441885cab0164996941a963a34796e16712ac2)), I migrated key hero imagery to **WebP**, paired with Next.js image sizing appropriate for a static `output: "export"` build (unoptimized assets deployed as-is). I also chased smaller quality issues that distort perceived performance—like SVG logo text that depended on fonts missing in production—so the above-the-fold experience renders crisply on first paint.

These changes keep the new Next.js site feeling snappy on real devices without reintroducing a dynamic image optimizer behind the scenes.
