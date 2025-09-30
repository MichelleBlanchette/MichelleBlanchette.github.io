---
title: "Facebook Messenger Bot to Register WordPress Users via ManyChat API"
slug: "facebook-messenger-bot-to-register-wordpress-users-via-manychat-api"
---

A client of mine had a grand vision for their Black Friday marketing initiatives. They were having a lot of success with Facebook Messenger and used [ManyChat](https://manychat.com/) to automate conversation flows. For Black Friday, they wanted to give their Facebook contacts an easy way to join their WordPress website.

With their marketing team, I configured a ManyChat flow with [Dynamic Blocks](https://support.manychat.com/support/solutions/articles/36000143342-dev-tools-dynamic-block) to process API requests to their WordPress website. The flow collected various information from the user and then sent a request to a custom WordPress REST API endpoint that I developed. Depending on the information provided, the custom endpoint would register the user in WordPress, tag the user in [Keap](https://keap.com/), reward [Gamipress](https://gamipress.com/) points, and then respond with a success message containing their generated password and a sign-in link.
