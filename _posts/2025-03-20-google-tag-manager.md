---
title: "Cut Blocking Time by 35% & Restored Google Tag Manager Best Practices"
short: "Phew! I just fixed the load order of OneTrust and Google Tag Manager (GTM) which cut Total Blocking Time (TBT) by 35%. **My automated tests definitely gave immediate peace-of-mind during all deployments** so I could confidently ensure Marketing's analytics weren't negatively impacted whatsoever by the optimizations. 😇"
---

After gaining access to Google Tag Manager at DentalPlans.com, I learned that they had a long-standing "Urgent" (red alert) container quality. During my investigation, I found they had been loading GTM in the footer as a workaround for historic third-party script conflicts, undermining data accuracy and observability.

I prioritized and resolved the issue by restoring GTM to its proper location in the `<head>` as Google recommends. I also audited our other frontend scripts&mdash;including legacy configurations for OneTrust and jQuery&mdash;and added configurations in WordPress to help the team rapidly respond to future third-party issues without a deployment.

This effort cut Total Blocking Time by 35% and restored confidence in the quality of our analytics. Stakeholders were kept fully informed of the changes, and the release went live without disruption.
