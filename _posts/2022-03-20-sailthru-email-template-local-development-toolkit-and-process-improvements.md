---
title: "Sailthru Email Template Local Development Toolkit and Process Improvements"
slug: "sailthru-email-template-local-development-toolkit-and-process-improvements"
---

While working full-time as a Software Engineer with Hearst, I took on additional responsibilities by becoming our team&#8217;s <a href="https://www.sailthru.com/" target="_blank" rel="noreferrer noopener">Sailthru</a> email template engineer. We did not have a very good development process in place to work with <a href="https://getstarted.sailthru.com/developers/zephyr-syntax/zephyr-syntax-overview/" target="_blank" rel="noreferrer noopener">Sailthru&#8217;s custom templating language (Zephyr)</a>, so I also took it upon myself to implement a toolkit.

Since the email templates contain Zephyr markup, I used <a href="https://getstarted.sailthru.com/developers/api/preview/" target="_blank" rel="noreferrer noopener">Sailthru&#8217;s API endpoint for previewing Zephyr email templates</a>. That allowed me to edit the templates on my local machine and then render the email in my web browser. For further testing, I could simply tick a checkbox to send a test email of my changes instead.

Additionally, I wrote two other scripts for downloading Sailthru <a href="https://getstarted.sailthru.com/developers/api/template/" target="_blank" rel="noreferrer noopener">email template contents</a> and <a href="https://getstarted.sailthru.com/developers/api/include/" target="_blank" rel="noreferrer noopener">&#8220;include&#8221; template parts</a> respectively. We use Sailthru in advanced ways at Hearst with custom Data Feed configurations, so I architected the toolkit to support that. Synching the template code locally from Sailthru provided a lot of key benefits:

<ul class="wp-block-list"><li>Version control and code backups via Git (which also facilitates proper code review process)</li><li>Easily make changes to existing email templates using the developer&#8217;s own code editor</li><li>Code searchability via terminal commands such as `grep` (which also means easier code auditing)</li><li>Ability to mix custom code with Sailthru&#8217;s WYSIWYG editor to reduce custom code burden</li><li>Detailed template error messaging via the Preview endpoint&#8217;s response</li></ul>
