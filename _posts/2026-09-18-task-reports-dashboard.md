---
title: "Built a Task Reports Dashboard for Visibility into Background Syncs"
short: "No more digging through logs. I built a **wp-admin dashboard that shows running and failed sync tasks** at a glance. 📊"
---

The point-of-sale to Keap integration runs several long background tasks, and diagnosing their progress previously meant reading server logs. That made it hard for anyone but a developer to tell whether a sync was healthy.

I designed and built a Task Reports dashboard in wp-admin that summarizes each task run, including in-progress and failed tasks, along with Keap tag counts and favorite tags for quick lookups.

The team can now check sync health directly in WordPress, which complements the automated health-check emails.
