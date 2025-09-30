---
title: "Stabilized Google Map UX & Reduced API Usage with Memoized Rendering"
images:
   - src: "/images/portfolio/dentalplans/dentist-search-results.png"
     caption: "Dentist search application on DentalPlans.com"
---

The dentist search feature on DentalPlans.com includes an interactive Google Map built into a React application. In high-density areas, users experienced jarring flickers and recentering bugs when panning the map, creating a frustrating and unreliable experience.

I replaced the outdated map component with Google’s officially supported implementation, resolving deprecation issues and improving baseline stability. I then introduced memoization to avoid unnecessary re-renders, significantly boosting performance.

The updated solution delivered smoother interactions, reduced redundant API calls, and laid the groundwork for future scalability without additional tech debt.
