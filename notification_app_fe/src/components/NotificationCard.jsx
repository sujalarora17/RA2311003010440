export default function NotificationCard({ notification, onView, isViewed }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      background: isViewed ? "#f5f5f5" : "#fff",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{
          background: notification.Type === "Placement" ? "#4caf50"
            : notification.Type === "Result" ? "#2196f3" : "#ff9800",
          color: "#fff",
          padding: "2px 10px",
          borderRadius: "12px",
          fontSize: "12px",
        }}>
          {notification.Type}
        </span>
        <span style={{ fontSize: "12px", color: "#888" }}>
          {notification.Timestamp}
        </span>
      </div>
      <p style={{ margin: "10px 0" }}>{notification.Message}</p>
      {!isViewed && (
        <button
          onClick={() => onView(notification.ID)}
          style={{
            background: "#1976d2",
            color: "#fff",
            border: "none",
            padding: "6px 14px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Mark as Viewed
        </button>
      )}
    </div>
  );
}