---
title: "Phone-Verified Member Registration with SMS and Voice Call Codes"
short: "Members can now **register with just their phone number**. If a text doesn't arrive, a voice call reads their code aloud. 📱"
---

Many of a Platyform client's customers already existed as Keap contacts but had never created a website login, and asking them to remember the email on file caused friction. I built a React-powered registration form, delivered as a WordPress shortcode, that finds the customer's existing Keap contact by phone number.

Before revealing any account information, the form verifies phone ownership with a one-time code sent via Twilio, with options to resend or receive an automated voice call that slowly repeats the digits. I also added an email lookup fallback, duplicate-account prevention, active account summaries, and optional automatic login after registration.

Customers can securely claim their member accounts in a couple of steps without contacting support.
