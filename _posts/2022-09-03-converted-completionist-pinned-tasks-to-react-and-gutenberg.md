---
title: "Modernized Completionist Pinned Tasks with React and Gutenberg"
short: "I rebuilt Completionist’s **Pinned Tasks metabox in ReactJS and Gutenberg** so site editors get a responsive, block-editor-native experience when surfacing Asana work on posts."
images:
   - src: "/images/portfolio/purpleturtlecreative/completionist.png"
     caption: "Completionist product landing page"
---

Completionist’s original Pinned Tasks interface worked, but it was showing its age: jQuery-era patterns made the metabox harder to extend and inconsistent with how WordPress site owners expect to work in the block editor era.

I migrated Pinned Tasks to **ReactJS with Gutenberg-era architecture** ([PR #84](https://github.com/PurpleTurtleCreative/completionist/pull/84)), aligning the editing experience with modern WordPress admin UX. Editors can pin Asana tasks directly to posts without leaving a clunky legacy panel behind.

This refactor laid groundwork for faster iteration on task actions, better state management, and the richer Completionist features that followed—including dashboard widget improvements and shortcode enhancements.
