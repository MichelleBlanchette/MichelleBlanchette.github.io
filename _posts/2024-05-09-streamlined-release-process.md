---
title: "Replaced Manual Release Process with 90% Faster Automated Workflow"
---

Website deployments at DentalPlans.com used to require 30 minutes of manual prep: developers had to sift through recent Git commits, extract Jira ticket IDs, manually format a list of changes, and send it in an internal release email. The process was slow, error-prone, and often led to inconsistent communication across teams.

I introduced a new workflow using Jira Releases, allowing developers to tag completed tickets as part of a version during normal development. I then automated the remaining steps with a Jira Automation that sends a formatted HTML summary to stakeholders and updates all relevant tickets to their post-release status.

Release prep now takes just 3 minutes, with fewer errors, clearer communication, and full visibility into which features are shipping. The workflow has been so effective that other engineering teams have adopted the same system.
