export default function FilterBar({ filter, setFilter, limit, setLimit }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "8px", borderRadius: "4px" }}
      >
        <option value="">All Types</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      <input
        type="number"
        value={limit}
        min={1}
        placeholder="Top N"
        onChange={(e) => setLimit(Number(e.target.value))}
        style={{ padding: "8px", borderRadius: "4px", width: "80px" }}
      />
    </div>
  );
}