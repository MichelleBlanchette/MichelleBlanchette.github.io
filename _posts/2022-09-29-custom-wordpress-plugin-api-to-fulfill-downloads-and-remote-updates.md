---
title: "Custom WordPress Plugin API to Fulfill Downloads and Remote Updates"
slug: "custom-wordpress-plugin-api-to-fulfill-downloads-and-remote-updates"
images:
   - src: "/images/portfolio/purpleturtlecreative/product-download.png"
     caption: "Product download form"
---

After developing [Completionist](https://purpleturtlecreative.com/completionist/), I wanted to make it available for free download. Instead of listing it in the WordPress.org plugins directory as I had done with [Grouped Content](https://wordpress.org/plugins/grouped-content/), I wanted to create my own resources server API.

To implement the client-side connection, I used [YahnisElsts’s plugin-update-checker package on GitHub](https://github.com/YahnisElsts/plugin-update-checker). This gave me a fantastic starting place to understand what API endpoints I needed to create.

I packaged the resources server code into a WordPress plugin which runs on Purple Turtle Creative. It includes custom WordPress REST API endpoints to dynamically deliver the plugin’s details from the requested release’s ZIP file.

The endpoints are secured with nonces to ensure the download link expires. Direct requests for the plugin ZIP file are also denied via NGINX rules, so the release package can _only_ be downloaded via a valid request to the resources API. Lastly, I implemented [Google Analytics’ Measurement Protocol API](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag) to monitor the API’s traffic and performance.
