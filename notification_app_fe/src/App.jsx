import { useState, useEffect } from "react";
import { fetchNotifications } from "./api/notifications";
import FilterBar from "./components/FilterBar";
import PriorityInbox from "./components/PriorityInbox";
import NotificationList from "./components/NotificationList";

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(10);
  const [viewedIds, setViewedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadNotifications();
  }, [filter]);

  async function loadNotifications() {
    setLoading(true);
    setError("");
    try {
      const data = await fetchNotifications({
        limit: 100,
        page: 1,
        notification_type: filter,
      });
      setNotifications(data);
    } catch (err) {
      setError("Failed to load notifications.");
    } finally {
      setLoading(false);
    }
  }

  function handleView(id) {
    setViewedIds((prev) => [...prev, id]);
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>📢 Campus Notifications</h1>
      <FilterBar filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <>
          <PriorityInbox
            notifications={notifications}
            limit={limit}
            viewedIds={viewedIds}
            onView={handleView}
          />
          <hr />
          <NotificationList
            notifications={notifications}
            viewedIds={viewedIds}
            onView={handleView}
          />
        </>
      )}
    </div>
  );
}