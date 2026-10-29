---
title: "Turned Cruise Deals into Google Ads Product Feeds for Dynamic Remarketing"
short: "Every published cruise deal now flows straight into Google Merchant Center and Google Ads, so **remarketing ads show visitors the exact deals they viewed.** 🎯"
---

TopCruiseDeals wanted to run Google dynamic remarketing campaigns, which require a product feed that stays in sync with the deals on the website. Rather than maintaining a spreadsheet by hand, I built feed endpoints directly into the WordPress theme.

Custom rewrite rules serve an XML product feed that follows Google Merchant Center's product data specification, plus a CSV data feed formatted for Google Ads. Both are generated live from published deal posts and their ACF fields, so new, updated, and expired deals are reflected automatically.

Marketing now has always-current feeds for remarketing without any manual exports.
