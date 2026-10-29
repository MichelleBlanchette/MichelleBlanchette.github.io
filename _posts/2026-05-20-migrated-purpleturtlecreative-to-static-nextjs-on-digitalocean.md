---
title: "Migrated Purple Turtle Creative to a Static Next.js Site on DigitalOcean"
short: "I replaced our heavyweight WordPress marketing stack with a **static Next.js export** on DigitalOcean App Platform—faster builds, simpler hosting, and routing that just works."
images:
   - src: "/images/portfolio/purpleturtlecreative/home.png"
     caption: "New marketing homepage"
   - src: "/images/portfolio/purpleturtlecreative/footer.png"
     caption: "Footer with business details"
---

Purple Turtle Creative’s public site had outgrown its WordPress theme: plugin updates, hosting quirks, and a custom post type we no longer used were adding maintenance overhead without helping clients.

I rebuilt the marketing site as a **static Next.js application** (`output: "export"`) deployed on **DigitalOcean App Platform**, merging the work in [PurpleTurtleCreative/website PR #24](https://github.com/PurpleTurtleCreative/website/pull/24). TailwindCSS carries the brand forward, and the App Platform serves pre-rendered HTML without a PHP runtime.

Static hosting exposed a few sharp edges—especially **deep links 404ing** until I aligned Next.js `trailingSlash` output with DigitalOcean’s directory routing. Once that was in place, custom routes and internal links behaved consistently in every environment.

The new stack is easier to ship, cheaper to operate, and a better foundation for the authenticated **client portal** I layered on next—all without sacrificing the polished marketing experience Purple Turtle Creative clients expect.
