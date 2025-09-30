---
title: "SMS Marketing Suite with CRM Integration Using Twilio and Keap"
slug: "sms-marketing-suite-with-crm-integration-using-twilio-and-keap"
---

[Keap](https://keap.com/) is a SaaS CRM, sales, and marketing automation platform that [also offers text message marketing](https://keap.com/solutions/messages). However, it costs over twice as much as using [Twilio](https://www.twilio.com/), the leading API-based cloud communication platform. To keep messaging costs low, I wrote a WordPress plugin to integrate Keap and Twilio.

The primary feature within this plugin is a WordPress admin page for sending an SMS message to a group of Keap contacts. The recipients are determined by chosen Keap tags via a multi-select combobox within the “SMS Blast” form. Below that, there is a text area field to compose the SMS message. Keap contact field variables can be included in the message template with an optional fallback value like `%%Contact.FirstName%%` or `%%Contact.City|your area%%`.

Since the goal of this WordPress plugin is to keep marketing costs low, data validation and confirmation are essential. After submitting the SMS Blast form, the system processes and stores the data for review. The review screen shows Keap contacts vs. planned Twilio messages followed by potential alerts of discrepancies. This may include the number of duplicate phone numbers, contacts missing required template variables, and contacts not opted in to receive text messages. Lastly, the review screen offers buttons for sending to a test group and final submission.

This plugin also includes various custom WordPress REST API endpoints to further integrate Twilio and Keap. Some endpoints create, tag, and update Keap contacts while others send texts and trigger flows via Twilio. Within Keap campaigns and Twilio Studio flows, these WordPress endpoints facilitate more engaging and personalized customer experiences.
