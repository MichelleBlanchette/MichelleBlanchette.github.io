---
title: "Launched Completionist on WordPress.org with Automated Release Publishing"
short: "Completionist graduated to an **official WordPress.org listing**—backed by a GitHub Action that publishes releases so shipping fixes is repeatable, not manual drudgery."
images:
   - src: "/images/portfolio/purpleturtlecreative/wporg-completionist-plugin.png"
     caption: "Official WordPress.org plugin listing"
---

For years I distributed Completionist through Purple Turtle Creative’s own update API—which I also built as a custom WordPress REST resources server. That worked, but WordPress site owners trust and discover plugins through the **official WordPress.org directory**, and maintaining two distribution channels was overhead I wanted to simplify.

I released **Completionist v4.0.0** to WordPress.org ([PR #201](https://github.com/PurpleTurtleCreative/completionist/pull/201)) and wired up a **GitHub Action to publish releases** ([PR #203](https://github.com/PurpleTurtleCreative/completionist/pull/203)) so tagged builds deploy through a checklist-driven workflow instead of error-prone manual steps.

Listing on WordPress.org expanded Completionist’s reach while the automation kept my solo maintainer pipeline sustainable as the plugin grew.
