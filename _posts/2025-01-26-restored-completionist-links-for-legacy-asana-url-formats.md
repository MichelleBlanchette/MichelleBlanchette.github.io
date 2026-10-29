---
title: "Restored Completionist Task Links for Legacy Asana URL Formats"
short: "When Asana’s permalink formats shifted, Completionist’s **Mark Complete and task action links broke**—I restored compatibility for legacy v1 project and task URLs across the UI."
---

Asana evolved how project and task URLs are structured, but many long-running Completionist installs—and bookmarked admin workflows—still referenced **legacy v1 link formats**. After API and UI updates, task action links in the dashboard widget and Pinned Tasks metabox could silently point to the wrong destinations.

I updated link parsing and frontend behavior to support **legacy v1 project and task URLs** again ([PR #248](https://github.com/PurpleTurtleCreative/completionist/pull/248)), covering initial render, Mark Complete updates, and pin/unpin flows. For public `[ptc_asana_task]` shortcodes, I also stopped exposing action-link payloads that are not useful off-site—reducing accidental leakage of internal Asana navigation data.

The fix kept existing customer sites stable without forcing them to reconfigure projects overnight.
