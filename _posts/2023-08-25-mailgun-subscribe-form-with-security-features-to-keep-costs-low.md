---
title: "Mailgun Subscribe Form with Security Features to Limit Costs"
slug: "mailgun-subscribe-form-with-security-features-to-keep-costs-low"
---

While Twitter was becoming X and Meta was releasing Threads, Purple Turtle Creative decided to offer a reliable, platform-independent way to keep interested users informed: good ol&#8217; fashioned email. Purple Turtle Creative is a bootstrapped business that keeps costs low by foregoing expensive CRM service subscriptions, though. This meant that I needed to implement a re-usable mailing list subscription form by using our API-based email service provider, Mailgun.

Since Mailgun uses volume-based pricing, security was a top priority for the mailing list subscription forms to protect Purple Turtle Creative from exorbitant surprise fees. As the first layer of protection, I implemented <a href="https://www.cloudflare.com/products/turnstile/" target="_blank" rel="noreferrer noopener">Cloudflare&#8217;s new CAPTCHA solution called Turnstile</a> on the client side. An advanced bot might still slip through, though, and humans sometimes make mistakes. That&#8217;s why I also decided to implement a double opt-in process to ensure the integrity of the mailing list and protect Purple Turtle Creative&#8217;s sender reputation.

Using a double opt-in process means that subscribers must click a verification link in a confirmation email to <em>actually</em> subscribe to the mailing list. That costs one email in Mailgun&#8217;s volume-based pricing, so I created a database table to track email verification requests and impose rate limits. There is a cooldown period to prevent rapid repeat requests, a maximum number of permitted retries per email address, and a weekly limit of total API usage. Atomic database access is essential to ensure there is consistency between all rate limit trackers and concurrent email verification requests.

To optimize the user experience, the subscription forms submit asynchronously via JavaScript and a custom WordPress REST API endpoint. Form interactions are tracked via Google Analytics on the frontend for conversion performance reporting, and the backend is tracked via Google&#8217;s Measurement Protocol API for site reliability monitoring and further insights on system behavior.
