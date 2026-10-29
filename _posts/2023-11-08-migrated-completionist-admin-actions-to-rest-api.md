---
title: "Migrated Completionist Admin Actions from AJAX to REST API Routes"
short: "I replaced legacy admin-ajax handlers with a structured **REST API routing layer**—fixing real bugs and making Completionist easier to secure and extend."
---

Completionist’s WordPress admin features originally relied on `admin-ajax.php` handlers. That pattern is fragile: endpoints are easy to scatter, hard to test, and awkward to reuse from modern JavaScript using `@wordpress/api-fetch`.

While fixing a bug where Page IDs in automation fields couldn’t resolve titles through core REST routes alone, I introduced a dedicated **`Rest_Routes` class** and migrated AJAX actions to proper REST endpoints ([issue #36](https://github.com/PurpleTurtleCreative/completionist/issues/36), [PR #199](https://github.com/PurpleTurtleCreative/completionist/pull/199)). Asana-specific routes stay segmented from generic WordPress utilities.

The migration improved reliability for automations and admin UI data loading, and it established a consistent API surface for everything Completionist’s React settings and metabox components call going forward.
