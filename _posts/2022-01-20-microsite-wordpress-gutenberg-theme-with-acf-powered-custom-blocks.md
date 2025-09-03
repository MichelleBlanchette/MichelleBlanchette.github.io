---
title: "Microsite WordPress Gutenberg Theme with ACF-Powered Custom Blocks"
slug: "microsite-wordpress-gutenberg-theme-with-acf-powered-custom-blocks"
has_image: true
---

PETA Germany had rebranded their Veganstart mobile application and needed to update the promotional website to match. They worked with a web designer to create and publish the layouts in Adobe XD. I then developed a new WordPress Gutenberg theme based on the design compositions.

The site build notably included a custom <a href="https://kenwheeler.github.io/slick/" target="_blank" rel="noreferrer noopener">SlickJS</a> slider, GDPR compliance with <a href="https://www.cookiepro.com/" target="_blank" rel="noreferrer noopener">CookiePro</a>, custom blocks via <a href="https://www.advancedcustomfields.com/resources/acf_register_block_type/" target="_blank" rel="noreferrer noopener">ACF Pro&#8217;s `acf_register_block_type()`</a> method in PHP, and adequate accessibility features. The differences between the desktop and mobile styles required quite a bit of finesse to achieve a smooth degradation in screen size. My goal was to use as few markup differences as possible between desktop and mobile to optimize performance and DOM tree simplicity.

{% include image_with_caption.liquid
   src="/assets/images/peta-de-veganstart/1.png"
   alt=""
   caption="landing hero" %}

{% include image_with_caption.liquid
   src="/assets/images/peta-de-veganstart/2.png"
   alt=""
   caption="app download" %}

{% include image_with_caption.liquid
   src="/assets/images/peta-de-veganstart/3.png"
   alt=""
   caption="features and testimonials" %}

{% include image_with_caption.liquid
   src="/assets/images/peta-de-veganstart/4.png"
   alt=""
   caption="facts slider and FAQ accordions" %}
