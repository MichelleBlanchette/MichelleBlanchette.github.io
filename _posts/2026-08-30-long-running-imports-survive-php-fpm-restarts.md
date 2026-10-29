---
title: "Kept 56-Hour Data Imports Alive Through Automatic Security Patching"
short: "Security updates were silently killing a multi-day CRM import. I **moved the long-running jobs out of php-fpm** so patches and imports stop fighting. 🛡️"
---

A Platyform integration syncs a car wash operator's point-of-sale data into Keap through Action Scheduler jobs that can run for up to 56 hours. Every time the server's unattended security upgrades restarted php-fpm, the in-flight import was killed and its next recurring run was never scheduled.

Rather than disabling security restarts, I moved this plugin's jobs onto dedicated per-hook WP-CLI processes launched by system cron with `flock` locks, and excluded the plugin's job group from Action Scheduler's default php-fpm runner so other plugins keep working normally. Token refresh got its own process so it can never be stuck behind a long import.

Long imports now continue across php-fpm restarts while security patches still take effect, and the existing health checker remains as a safety net.
