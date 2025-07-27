---
title: "Elementor Site Converted to Custom WordPress Gutenberg Theme"
slug: "elementor-site-converted-to-custom-wordpress-gutenberg-theme"
---

The Purple Turtle Creative website was originally created with <a href="https://elementor.com/products/hello-theme/" target="_blank" rel="noreferrer noopener">the Elementor Pro plugin</a> with <a href="https://elementor.com/hello-theme/" target="_blank" rel="noreferrer noopener">Elementor&#8217;s Hello theme</a>. Since the website no longer needed design changes, it was time to commit the design to custom code. The main goal of the conversion was to remove dependency on the Elementor plugin. This would ultimately optimize site performance, decrease expenses, and reduce upkeep.

Throughout development, Google Lighthouse reports were my main KPIs (key performance indicators). I optimized CSS code coverage by strategically using SCSS partials to compose single stylesheets per theme template. Additionally, I dequeue third-party scripts and stylesheets on templates not using them. My theme scripts use only vanilla JavaScript, so I could remove jQuery as a frontend dependency, as well. To efficiently load the site&#8217;s fonts, I limited the imported character sets and defined proper preconnect and preload link tags.

With many other optimizations implemented, the result is a blazing fast, custom Gutenberg WordPress website that loads in less than half a second. For more information, please <a href="https://purpleturtlecreative.com/blog/2020/12/elementor-pro-vs-custom-wordpress-theme-performance-report/" target="_blank" rel="noreferrer noopener">read my blog post for a thorough report of the performance improvements</a>.
