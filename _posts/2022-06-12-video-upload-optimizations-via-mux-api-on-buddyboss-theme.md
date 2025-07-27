---
title: "Video Upload Optimizations via Mux API on BuddyBoss Theme"
slug: "video-upload-optimizations-via-mux-api-on-buddyboss-theme"
---

Poor video performance often leads BuddyBoss site owners to use third-party video embeds via YouTube or Vimeo. However, this requires the user to upload and host their videos from another platform—a platform they do not own nor have control over. This is an unacceptable solution for site visitor-uploaded content, which occurs directly on the business&#8217;s BuddyBoss WordPress website.

Using <a href="https://www.mux.com/" target="_blank" rel="noreferrer noopener">the Mux API</a>, I was able to bring video optimizations to WordPress, including normalized audio tracks. I developed a custom WordPress plugin that uploads new videos to Mux and caches the Mux asset data to the site. To ensure the cached asset data is always current, I implemented a custom REST endpoint to process Mux webhook events. The endpoint is secured by <a href="https://docs.mux.com/guides/video/verify-webhook-signatures" target="_blank" rel="noreferrer noopener">verifying each request&#8217;s signature</a>.

To achieve a seamless frontend experience, I implemented JavaScript that collects video source URLs that are not hosted via Mux. The video posters are replaced with a &#8220;Processing Video&#8221; loader gif image while the JavaScript continuously checks each Mux asset&#8217;s status. Once the static renditions are ready, the JavaScript sets the video source to the Mux playback URL and removes the &#8220;processing&#8221; poster.
