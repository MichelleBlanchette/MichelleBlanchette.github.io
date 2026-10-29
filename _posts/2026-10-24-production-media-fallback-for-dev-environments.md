---
title: "Let Local and Cloud Dev Environments Use Production Media Without Copying Uploads"
short: "Developers and AI coding agents can now spin up TopCruiseDeals with a database dump, and **every image just works**, with no uploads folder sync. 🧑‍💻"
---

Working against a production database dump locally usually means broken images unless you also copy the entire uploads directory, which slows down onboarding for both developers and cloud coding agents.

I wrote a development-only must-use plugin that is loaded solely through the local wp-env configuration and exits unless the environment type is local or development. It rewrites attachment URLs, srcsets, rendered block HTML, and direct upload requests so that any file missing locally is served from production, while files that do exist locally still win.

Fresh environments now render real deal cards and featured images immediately, which made the project ready for cloud-agent workflows.
