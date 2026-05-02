export async function fetchNotifications({ limit, page, notification_type }) {
  const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYTA2NjdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNzA2OSwiaWF0IjoxNzc3NzA2MTY5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDY0YjU1NGEtZGUyZS00MmM0LWI4YTMtYWI2MjQ3YmM5OThhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3VqYWwgYXJvcmEiLCJzdWIiOiIyY2ZkNWZiYS1mZGI4LTQ4OWEtYWRlYS1kNGNmMmIwNTEwMTQifSwiZW1haWwiOiJzYTA2NjdAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJzdWphbCBhcm9yYSIsInJvbGxObyI6InJhMjMxMTAwMzAxMDQ0MCIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjJjZmQ1ZmJhLWZkYjgtNDg5YS1hZGVhLWQ0Y2YyYjA1MTAxNCIsImNsaWVudFNlY3JldCI6InFkUUFDWk51S0dLZXRTWloifQ._nI7Wsan4OHfiqcSbZbAMS8Sl2HJoqwIsEHUTLfklS4";

  const params = new URLSearchParams();
  if (limit) params.append("limit", limit);
  if (page) params.append("page", page);
  if (notification_type) params.append("notification_type", notification_type);

  const res = await fetch(`/api/evaluation-service/notifications?${params.toString()}`, {
    headers: {
      "Authorization": `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch notifications");

  const data = await res.json();
  return data.notifications;
}