---
title: "Closed the Loop on SMS Delivery Failures with Automatic CRM Tagging"
short: "Failed texts now **tag the contact in Keap automatically**, and future blasts skip non-compliant or undeliverable numbers by default. ✅"
---

The SMS Blaster I built for a Platyform client sends campaigns to Keap contacts through Twilio, but delivery failures were only visible inside Twilio. Marketing kept paying to send messages to numbers that had opted out or repeatedly failed.

I added Twilio request and delivery-status error handling that applies consistent, fixed Keap tags per error code. Those tags are pre-created in a single background job so parallel status callbacks can't create duplicates. The blast review screen now warns about contacts with delivery issues, and non-compliant and undeliverable numbers are excluded by default, with that exclusion enforced on the backend. Opt-out instructions are included in blasts by default.

Each campaign now cleans its own list, which reduces wasted sends and supports messaging compliance.
