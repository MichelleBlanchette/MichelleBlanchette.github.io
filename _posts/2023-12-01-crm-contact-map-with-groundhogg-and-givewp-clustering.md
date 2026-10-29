---
title: "Mapped CRM Contacts and Donors with Clustering for a Membership Organization"
short: "I combined **Groundhogg and GiveWP** data on an interactive map with marker clustering so staff can explore contacts geographically without drowning in pins."
---

A membership organization wanted to see where contacts and donors actually live—not just rows in a CRM table. Marketing and outreach teams needed a map view that stayed usable even with thousands of points.

I built a custom map in the **ptf-maps** plugin that pulls **Groundhogg** contact locations together with **GiveWP** giving data, then applies **marker clustering** so dense regions collapse into summaries until you zoom in. The approach is separate from the SVG map and React map work I have done on other properties; here the goal was an admin-facing CRM geography tool on WordPress.

Staff can now spot regional patterns and plan outreach without exporting spreadsheets to a third-party mapping tool.
