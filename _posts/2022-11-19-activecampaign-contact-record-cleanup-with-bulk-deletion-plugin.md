---
title: "ActiveCampaign Contact Record Cleanup with Bulk Deletion Plugin"
slug: "activecampaign-contact-record-cleanup-with-bulk-deletion-plugin"
---

After running a successful online business for some time, stale contact records eventually pile up. This means costs consistently increase when using a CRM with volume-based pricing, such as [ActiveCampaign](https://www.activecampaign.com/). However, there is no quick way to purge these cold contacts within ActiveCampaign!

To help businesses reduce their CRM costs and clean up their records, I created a WordPress plugin. It registers a new WordPress admin page with a quick, multi-step process. Since it is quick to tag contacts within ActiveCampaign in bulk, I decided to mark contacts for deletion with a tag. Then the business can apply the “Marked for Deletion” tag to all ActiveCampaign contact records that they’d like to delete.

In the WordPress admin page, the user first clicks a button to start the process. API requests to ActiveCampaign then retrieve all contact records with the “Marked for Deletion” tag. The WordPress admin page then displays the number of contact records, asking the user to confirm the bulk deletion process. Once confirmed, all contact records are then deleted from ActiveCampaign. Since this process can take a while depending on the number of contacts, I used benchmark tests to also show the WordPress user an estimated end time.
