---
title: "Extended Grouped Content Plugin to Support Hierarchical Custom Post Types"
short: "Grouped Content no longer locked users to Pages—I added **first-class support for every public hierarchical post type** on a site, including custom structures."
---

My open-source plugin [Grouped Content](https://wordpress.org/plugins/grouped-content/) helps WordPress teams organize related entries into navigable groups. Early releases focused on Pages, but client sites increasingly relied on **hierarchical custom post types** for structured content—and those teams wanted the same grouping workflow.

I shipped hierarchical CPT support in [PR #34](https://github.com/PurpleTurtleCreative/grouped-content/pull/34): the admin menu now surfaces a Groups screen per eligible post type, and the content generator exposes those types as selectable targets.

The enhancement made Grouped Content useful on more real-world builds without forked one-off code, and it remains available to anyone running the plugin from WordPress.org.
