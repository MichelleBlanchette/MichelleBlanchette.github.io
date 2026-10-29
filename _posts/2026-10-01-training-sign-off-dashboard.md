---
title: "Built a Training Sign-Off Dashboard for Site Managers"
short: "Site managers now see exactly **who has started training, how they scored, and who still needs a signature**, filtered to their own sites automatically. ✍️"
---

A car wash operator's employee training program runs on LearnDash, but site managers had no single place to review progress and sign off on completed trainings. I built a custom Platyform plugin with a manager view that lists employees with job position, wash site, district, course progress, and quiz scores.

Managers can filter by one or more wash sites, open a sign-off form in a modal that submits via AJAX, and spot rows still missing a manager signature at a glance. The view automatically scopes itself to the logged-in manager's district and sites, and the plugin prevents a manager from signing before the employee has signed.

Training sign-offs moved from scattered follow-ups into one self-serve dashboard.
