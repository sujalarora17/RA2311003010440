import NotificationCard from "./NotificationCard";

export default function NotificationList({ notifications, viewedIds, onView }) {
  const newNotifs = notifications.filter((n) => !viewedIds.includes(n.ID));
  const viewedNotifs = notifications.filter((n) => viewedIds.includes(n.ID));

  return (
    <div>
      <h2>🔔 New ({newNotifs.length})</h2>
      {newNotifs.map((n) => (
        <NotificationCard key={n.ID} notification={n} isViewed={false} onView={onView} />
      ))}
      <h2>✅ Viewed ({viewedNotifs.length})</h2>
      {viewedNotifs.map((n) => (
        <NotificationCard key={n.ID} notification={n} isViewed={true} onView={onView} />
      ))}
    </div>
  );
}