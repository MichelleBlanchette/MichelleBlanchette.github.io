---
title: "Ingested 25,191 Cruise Sailings with a Budget-Conscious API Sync Plugin"
short: "My first full production import pulled **25,191 cruise sailings in about 257 API calls**, with no observed impact on the live site. 🛳️📈"
---

TopCruiseDeals relied on third-party embeds for cruise itinerary search, which meant none of that content could earn SEO value on their own domain. To move toward owned itinerary pages, I built a custom WordPress plugin that ingests ocean, river, and guided-tour itineraries from the provider's metered API into a custom post type and a dedicated sailings table.

Since API usage is billed by volume and the site runs on managed hosting without SSH or system cron, I designed the sync around Action Scheduler with paginated, background jobs, a call counter, a usage and status report in wp-admin, and a pause switch with proper activation, deactivation, and uninstall lifecycle handling. The site never calls the API while rendering pages, which keeps it friendly to the host's full-page cache.

The first full production ingest created 25,191 sailings using about 257 API calls with no observed harm to the public site, and a later full re-index that expanded every additional departure date still stayed around 250–260 calls.
