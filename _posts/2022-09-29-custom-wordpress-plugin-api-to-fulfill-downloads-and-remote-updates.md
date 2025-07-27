---
title: "Custom WordPress Plugin API to Fulfill Downloads and Remote Updates"
slug: "custom-wordpress-plugin-api-to-fulfill-downloads-and-remote-updates"
---

After developing <a href="https://purpleturtlecreative.com/completionist/">Completionist</a>, I wanted to make it available for free download. Instead of listing it in the WordPress.org plugins directory as I had done with <a href="https://wordpress.org/plugins/grouped-content/" target="_blank" rel="noreferrer noopener">Grouped Content</a>, I wanted to create my own resources server API.

To implement the client-side connection, I used <a href="https://github.com/YahnisElsts/plugin-update-checker" target="_blank" rel="noreferrer noopener">YahnisElsts&#8217;s plugin-update-checker package on GitHub</a>. This gave me a fantastic starting place to understand what API endpoints I needed to create.

I packaged the resources server code into a WordPress plugin which runs on Purple Turtle Creative. It includes custom WordPress REST API endpoints to dynamically deliver the plugin&#8217;s details from the requested release&#8217;s ZIP file.

The endpoints are secured with nonces to ensure the download link expires. Direct requests for the plugin ZIP file are also denied via NGINX rules, so the release package can <em>only </em>be downloaded via a valid request to the resources API. Lastly, I implemented <a href="https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag" target="_blank" rel="noreferrer noopener">Google Analytics&#8217; Measurement Protocol API</a> to monitor the API&#8217;s traffic and performance.
