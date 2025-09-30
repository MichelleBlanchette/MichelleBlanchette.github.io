---
title: "Sailthru Email Template Local Development Toolkit and Process Improvements"
slug: "sailthru-email-template-local-development-toolkit-and-process-improvements"
---

While working full-time as a Software Engineer with Hearst, I took on additional responsibilities by becoming our team’s [Sailthru](https://www.sailthru.com/) email template engineer. We did not have a very good development process in place to work with [Sailthru’s custom templating language (Zephyr)](https://getstarted.sailthru.com/developers/zephyr-syntax/zephyr-syntax-overview/), so I also took it upon myself to implement a toolkit.

Since the email templates contain Zephyr markup, I used [Sailthru’s API endpoint for previewing Zephyr email templates](https://getstarted.sailthru.com/developers/api/preview/). That allowed me to edit the templates on my local machine and then render the email in my web browser. For further testing, I could simply tick a checkbox to send a test email of my changes instead.

Additionally, I wrote two other scripts for downloading Sailthru [email template contents](https://getstarted.sailthru.com/developers/api/template/) and ["include" template parts](https://getstarted.sailthru.com/developers/api/include/) respectively. We use Sailthru in advanced ways at Hearst with custom Data Feed configurations, so I architected the toolkit to support that. Synching the template code locally from Sailthru provided a lot of key benefits:

- Version control and code backups via Git (which also facilitates proper code review process)
- Easily make changes to existing email templates using the developer’s own code editor
- Code searchability via terminal commands such as `grep` (which also means easier code auditing)
- Ability to mix custom code with Sailthru’s WYSIWYG editor to reduce custom code burden
- Detailed template error messaging via the Preview endpoint’s response
