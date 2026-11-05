---
title: "Launched a Client Portal for Transparent Billing and Time Tracking"
short: "Clients can now **review categorized time entries, filter by month and project, and export CSVs**—with outstanding balances surfaced up front in headquarters time."
---

Purple Turtle Creative clients historically relied on emailed summaries to understand project time and open balances. That worked at first, but as engagements grew it became harder to answer simple questions like “what did we spend on Category X last quarter?” without back-and-forth.

I shipped a password-protected **client portal SPA** inside our Next.js site ([PR #27](https://github.com/PurpleTurtleCreative/website/pull/27)), backed by existing timesheet data. After login, clients see summary cards for credits, charges, and outstanding balance, with a **year switcher** to browse historical records.

**Multi-select filters** for months and project categories make it easy to drill into specific work—and a **Download CSV** action exports exactly what’s on screen for accounting. I also normalized **timezone interpretation to headquarters local time** so entry timestamps read the way our team intends, and promoted the **current-year amount due** into the portal header so nothing important hides below the fold.

The portal turns billing transparency into a self-service experience, which saves everyone time and reinforces trust.
