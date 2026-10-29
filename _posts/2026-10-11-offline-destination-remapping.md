---
title: "Closed Destination Data Gaps Without Spending More API Calls"
short: "I cut itineraries missing a destination **from 3,298 to 563** by storing location IDs locally and remapping offline instead of re-importing. 🗺️"
---

After the initial itinerary import, thousands of sailings were missing a cruise destination because the provider's location data didn't line up with the client's destination taxonomy. Re-running the full import to test every mapping fix would have burned through the metered API budget.

I started storing each itinerary's raw location ID list locally, then added client-approved destination aliases and an admin button that schedules a background remap job. Mapping fixes can now be applied across every itinerary without a single extra API call, and I wired the daily sync into a catalog → search index → offer-list invalidation chain so stale prices and removed sailings are cleaned up automatically.

Itineraries missing a destination dropped from 3,298 to 563, and the remaining gaps are documented in a coverage report shared with the client.
