---
title: "Fully Resolved 25,000+ Indexing Issues by Correcting Technical SEO Strategy"
---

While monitoring Search Console coverage reports for DentalPlans.com, I noticed a sharp upward trend in “Indexed, though blocked by robots.txt” warnings. Although some consultants considered it non-critical, I recognized that it was unintentionally exposing personalized checkout URLs in public search results.

Upon reviewing `robots.txt` configurations across properties, I traced the issue to blanket `Disallow: /` directives intended to reduce crawl activity on non-SEO domains. To resolve it, I implemented `noindex, nofollow` meta tags across these sites and removed the blocking rules to allow bots visibility of the directives.

After peaking at over 25,000 URLs, the indexing issue was completely resolved and crawl activity remained low across the affected domains.
