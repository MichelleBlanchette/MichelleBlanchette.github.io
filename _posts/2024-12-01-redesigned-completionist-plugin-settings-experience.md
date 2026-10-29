---
title: "Redesigned Completionist Settings with Native WordPress Components"
short: "I rebuilt Completionist’s plugin settings UI with **`@wordpress/components` and `@wordpress/api-fetch`** so it feels like modern wp-admin—not a bolted-on legacy form."
images:
   - src: "/images/portfolio/purpleturtlecreative/completionist.png"
     caption: "Completionist marketing site"
---

WordPress is steadily moving wp-admin toward Block Editor patterns. Completionist’s settings screen still looked like classic PHP admin—functional, but visually disconnected from the product experience users get elsewhere in WordPress.

I redesigned the settings experience ([issue #231](https://github.com/PurpleTurtleCreative/completionist/issues/231), [PR #239](https://github.com/PurpleTurtleCreative/completionist/pull/239)) using **`@wordpress/components`**, tabbed navigation, and **`@wordpress/api-fetch`** for data loading. The result aligns with Gutenberg design language and is easier to extend as Completionist’s configuration surface grows.

Shipping a native-feeling settings app reinforces trust: Completionist looks and behaves like software that belongs in a modern WordPress stack.
