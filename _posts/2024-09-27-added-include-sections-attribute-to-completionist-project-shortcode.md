---
title: "Added Opt-In Section Filtering to Completionist Project Shortcodes"
short: "Site owners can now use **`include_sections`** on `[ptc_asana_project]` to show only approved Asana sections—safer and easier than endlessly excluding new sections."
---

Asana projects accumulate sections over time, and not every section belongs on a public WordPress page. One Completionist user needed to **hide most sections** while Asana kept growing—maintaining long exclude lists was brittle.

I added an `include_sections` attribute to the `[ptc_asana_project]` shortcode ([issue #232](https://github.com/PurpleTurtleCreative/completionist/issues/232), [PR #234](https://github.com/PurpleTurtleCreative/completionist/pull/234)). When set, Completionist loads the project but renders **only the explicitly allowed sections**—an opt-in model that avoids accidentally publishing new internal sections.

This is a better default for security-conscious teams while preserving existing behavior for sites that want to display everything.
