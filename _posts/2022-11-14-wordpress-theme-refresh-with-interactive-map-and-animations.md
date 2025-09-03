---
title: "WordPress Theme Refresh with Interactive Map and Animations"
slug: "wordpress-theme-refresh-with-interactive-map-and-animations"
has_image: true
---

To prepare for the upcoming elections in 2022, Food and Water Action wanted to refresh some areas of their WordPress website. After the web designer and backend developer finished their work, I implemented the frontend styles and interactivity.

The <a href="https://www.foodandwateraction.org/endorsements/" target="_blank" rel="noreferrer noopener nofollow">Endorsements</a> page features an interactive SVG map. Different regions of the map become highlighted on hover and, when selected, filter the grid of candidates listed below. The candidate items feature a fun, stylish look with additional hover effects of their own. Fixed at the bottom of the viewport is an interactive donation component that smoothly transforms its layout when expanded. As the user slides between various donation values, the data points dynamically update to inform the donor on the impact of their contribution.

Additionally, I themed the single Endorsement template, the <a href="https://www.foodandwateraction.org/updates/" target="_blank" rel="noreferrer noopener nofollow">News &amp; Opinions</a> archive template, the <a href="https://www.foodandwateraction.org/volunteer-stories/" target="_blank" rel="noreferrer noopener nofollow">Volunteer Stories</a> archive template, and the <a href="https://www.foodandwateraction.org/victories/" target="_blank" rel="noreferrer noopener nofollow">Victories</a> archive template. Across these templates, I implemented various other frontend features such as <a href="https://github.com/desandro/masonry" target="_blank" rel="noreferrer noopener nofollow">masonry grids</a>, <a href="https://github.com/kenwheeler/slick/" target="_blank" rel="noreferrer noopener nofollow">sliders</a>, hover animations, animated counters, and scroll effects.

{% include image_with_caption.liquid
   src="/assets/images/food-and-water-action/endorsements.png"
   alt=""
   caption="The Endorsements archive page lists candidates which are able to be filtered by clicking a region on the map." %}

{% include image_with_caption.liquid
   src="/assets/images/food-and-water-action/news.png"
   alt=""
   caption="News & Opinions page for Food & Water Action" %}
