const TYPE_WEIGHT = { Placement: 300, Result: 200, Event: 100 };

export function getPriorityScore(notification) {
  const typeScore = TYPE_WEIGHT[notification.Type] || 0;
  const recencyScore = new Date(notification.Timestamp).getTime();
  return typeScore + recencyScore;
}

export function getTopN(notifications, n) {
  return notifications
    .map((item) => ({ ...item, priorityScore: getPriorityScore(item) }))
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, n);
}