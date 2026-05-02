# Stage 1

## Problem
Users lose track of important notifications due to high volume.

## Priority Logic
- Placement = weight 300 (highest)
- Result = weight 200 (medium)
- Event = weight 100 (lowest)
- Recency score = Unix timestamp of notification (newer = larger number)
- Final score = type weight + recency score

## Approach
Fetch all notifications from API. Assign a priority score to each.
Sort descending by score. Return top N.

## Maintaining Top 10 Efficiently
Instead of re-sorting all notifications on every new arrival,
maintain a sorted array of top 10. When a new notification arrives,
calculate its score and only insert it if it beats the lowest score
in the current top 10. This is O(1) comparison instead of O(n log n) sort.

## Output Screenshots
(Add screenshots of your running app here)