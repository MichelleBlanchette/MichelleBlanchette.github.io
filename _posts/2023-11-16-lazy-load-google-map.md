---
title: "Deferred Google Map Rendering to Reduce API Spend"
has_image: true
---

Dentist profile pages on DentalPlans.com included a Google Map at the bottom to help users locate practices. After a spike in automated traffic, the site began incurring excessive API usage fees despite most users never scrolling far enough to view the map.

To mitigate this, I implemented a lazy loading strategy that withheld rendering the Google Map until it approached the viewport. This preserved the intended UX while eliminating wasteful load behavior caused by bots and low-engagement users.

As a result, Google Maps API calls dropped significantly, cutting costs without any disruption to the user experience.

{% include image_with_caption.liquid
   src="/assets/images/dentalplans/dentist-details-map.png"
   alt=""
   caption="Interactive map at the bottom of a dentist profile" %}
