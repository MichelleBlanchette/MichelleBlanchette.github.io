---
title: "Cut Radar SDK Errors by 87.8% with Native Integration"
---

While analyzing Radar location detection logs for DentalPlans.com, I discovered that the majority of failures stemmed from a recurring `ERROR_PUBLISHABLE_KEY` issue. The key was correctly configured and the error appeared inconsistently, so I decided to look into it.

After deeper investigation, I traced the problem to a race condition where requests were sometimes triggered before the SDK had fully initialized with the publishable key. Since the SDK offered more functionality than we actually needed, I opted to streamline the implementation by replacing it with lightweight, native API calls to Radar.

This in-house solution fully resolved the race condition and eliminated the initialization errors, resulting in an 87.8% reduction in Radar-related errors. It also improved the end-user experience, cutting fallback experiences from 1.6% to just 0.88%.
