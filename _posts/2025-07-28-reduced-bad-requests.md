---
title: "Reduced First-Party API Errors by 75.6% After Implementing Pre-Request Validation"
short: |
   Error handling does much more than simply provide a polished UX for users! 📢

   Bots tirelessly bombard most web applications with malicious requests. This can lead to sudden unexpected API service costs or infrastructure instability. 💸

   That's why I implemented pre-request validation when proxying requests to an in-house API and **immediately achieved a 75.6% error rate reduction.** ⛔️
images:
   - src: "/images/portfolio/dentalplans/savings-calculator-results.png"
     caption: "Savings calculator results success"
   - src: "/images/portfolio/dentalplans/savings-calculator-results-error.png"
     caption: "Savings calculator pre-request validation error"
---

While reviewing HTTP error logs for DentalPlans.com, I noticed a disproportionate number of `400 Bad Request` responses originating from the marketing website’s calls to the Savings Calculator API. Many requests included clearly bogus values like “Snag your free gift” and “Claim your free Bitcoin,” indicating form-stuffing by bots targeting lead-generation forms.

I identified consistent patterns in these malformed requests and implemented robust pre-request validation to filter out bad actors before they ever reached the API service.

Following deployment, monitoring confirmed a complete elimination of these spammy inputs to the microservice, resulting in a 75.6% drop in overall `400` responses and improved API reliability.
