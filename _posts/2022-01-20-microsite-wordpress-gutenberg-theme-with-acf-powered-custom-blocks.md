---
title: "Microsite WordPress Gutenberg Theme with ACF-Powered Custom Blocks"
slug: "microsite-wordpress-gutenberg-theme-with-acf-powered-custom-blocks"
images:
   - src: "/images/portfolio/peta-de-veganstart/1.png"
     caption: "landing hero"
   - src: "/images/portfolio/peta-de-veganstart/2.png"
     caption: "app download"
   - src: "/images/portfolio/peta-de-veganstart/3.png"
     caption: "features and testimonials"
   - src: "/images/portfolio/peta-de-veganstart/4.png"
     caption: "facts slider and FAQ accordions"
---

PETA Germany had rebranded their Veganstart mobile application and needed to update the promotional website to match. They worked with a web designer to create and publish the layouts in Adobe XD. I then developed a new WordPress Gutenberg theme based on the design compositions.

The site build notably included a custom [SlickJS](https://kenwheeler.github.io/slick/) slider, GDPR compliance with [CookiePro](https://www.cookiepro.com/), custom blocks via [ACF Pro’s `acf_register_block_type()`](https://www.advancedcustomfields.com/resources/acf_register_block_type/) method in PHP, and adequate accessibility features. The differences between the desktop and mobile styles required quite a bit of finesse to achieve a smooth degradation in screen size. My goal was to use as few markup differences as possible between desktop and mobile to optimize performance and DOM tree simplicity.
