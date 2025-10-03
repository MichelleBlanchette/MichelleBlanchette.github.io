---
title: "Consolidated API Access to Improve Security, Stability, and Cost Control"
short: "**I identified and resolved 12+ insecure endpoints,** which also gave the added benefits of improved stability, performance, and reduced costs. 🧘‍♀️"
---

When I joined DentalPlans.com, I audited the frontend’s API usage and uncovered several critical issues: private microservice endpoints and authentication credentials were exposed to the public, and excessive re-rendering in the React app was triggering redundant, uncached requests to a metered third-party API. These problems not only introduced significant security risks but also led to a slow, flickering user experience and unnecessary infrastructure costs.

To address this, I introduced a proxy layer by exposing server-side REST endpoints to securely relay requests. This shielded the frontend from direct access to internal APIs, consolidated authentication logic, and provided a single control point for rate limiting and request shaping.

With object caching and browser-level caching strategies layered on top, the system now handles API traffic more efficiently. Usage costs dropped, performance improved, and the application became more stable—all while eliminating the public exposure of sensitive backend systems.
