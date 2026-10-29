---
title: "Automated Preventive Maintenance Alerts and Work Order Reports for Car Wash Sites"
short: "Overdue equipment maintenance now **texts the right people automatically**, and managers get one consolidated report per maintenance zone. 🔧"
---

A multi-location car wash operator tracked equipment maintenance in Formidable Forms, but overdue tasks and stale work orders depended on someone remembering to check. I built scheduled background jobs that calculate when each site's assets are due, honoring each wash site's custom maintenance day, and notify the responsible contacts via text message when maintenance becomes overdue.

I then added aggregate reports that group overdue work orders and part orders by maintenance zone into a single report post, instead of a flood of individual alerts. Along the way I resolved timezone and cron-context bugs so due dates and taxonomy assignments behave correctly when jobs run unattended.

Site teams now get timely, consolidated maintenance visibility without manual follow-up.
