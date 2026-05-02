import NotificationCard from "./NotificationCard";
import { getTopN } from "../utils/priority";

export default function PriorityInbox({ notifications, limit, viewedIds, onView }) {
  const topN = getTopN(notifications, limit);
  return (
    <div>
      <h2>🏆 Priority Inbox (Top {limit})</h2>
      {topN.map((n) => (
        <NotificationCard
          key={n.ID}
          notification={n}
          isViewed={viewedIds.includes(n.ID)}
          onView={onView}
        />
      ))}
    </div>
  );
}