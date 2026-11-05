---
title: "Kept Expiring Deals Accurate with a Timezone-Aware Midnight Rollover"
short: "Expired deals were lingering behind the host's page cache. Now every deal **rolls over at the client's local midnight and the cache purges itself**. ⏰"
---

TopCruiseDeals' managed host serves pages through Varnish, Redis, and OPcache layers, so even after an expired deal was removed, cached listings could keep showing it. Visitors also had no clear sense of urgency when a deal was about to end.

I added relative end-date labels like "Ends Today" and "Ends in N Days," and a timezone-aware cron job that trashes expired deals at the site's local midnight. When the original cache purge silently stopped working after a host plugin update, I traced the host's own "Clear Cache" button through its source code and switched to calling that same hook, with one-time error logging if the host's plugin ever changes again.

Deal listings now refresh reliably every night without anyone clicking a button.
