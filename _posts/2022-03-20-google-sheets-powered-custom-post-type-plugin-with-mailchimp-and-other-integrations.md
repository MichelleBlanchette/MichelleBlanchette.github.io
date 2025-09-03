---
title: "Google Sheets-Powered Custom Post Type Plugin with Mailchimp and Other Integrations"
slug: "google-sheets-powered-custom-post-type-plugin-with-mailchimp-and-other-integrations"
---

Upon joining the Local Commerce team at Hearst, I was asked to overhaul our map article custom post type. Each map article post features a custom Google Maps instance with scroll event interactions and animations.

To streamline the curation team&#8217;s efforts, I implemented the ability to import their collected merchant listing data from Google Sheets. The data is stored as metadata for each map article post, effectively caching the data in WordPress and serving as the posts&#8217; main content.

With our team&#8217;s designer, I then updated the frontend styles and functionality to improve the map articles&#8217; sales appeal. Additional features were implemented to make sponsored listings stand out from the regular listings. In particular, I custom-coded asynchronous email signup form modals which submitted to the <a href="https://mailchimp.com/" target="_blank" rel="noreferrer noopener">Mailchimp</a> and <a href="https://www.sailthru.com/" target="_blank" rel="noreferrer noopener">Sailthru</a> APIs. To ensure proper security, I also implemented custom WordPress REST API endpoints to proxy the form submission requests to the third-party APIs. My custom implementation of the Google ReCaptcha v3 API also validated the form submissions to reduce spam signups.
