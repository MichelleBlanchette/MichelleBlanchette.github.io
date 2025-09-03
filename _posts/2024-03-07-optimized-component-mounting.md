---
title: "Optimized Component Mounting to Prevent Wasteful API Calls"
has_image: true
---

The Participating Dentist tab on plan details pages provides a feature-rich experience powered by a custom React component and backend API calls. However, usage analytics revealed that most visitors never interacted with this tab, yet the component still mounted eagerly on every page load, triggering unnecessary API activity.

I restructured the rendering logic to opportunistically mount the component only when the tab became visible. This change preserved the interactive experience for engaged users while eliminating invisible overhead for the majority who never opened it.

As a result, the product pages load more efficiently, with a noticeable drop in unnecessary API requests. The change reduced backend load and improved overall performance without sacrificing functionality for users who engaged with the feature.

{% include image_with_caption.liquid
   src="/assets/images/dentalplans/plan-details-participating-dentists.png"
   alt=""
   caption="The Participating Dentists tab on a plan details page offers rich dentist search functionality in the context of the current plan" %}
