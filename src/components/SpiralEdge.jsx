// Fileira de argolas douradas, como a espiral dos cadernos nos mockups
// da marca.
export default function SpiralEdge({ count = 9, className = "", color = "#c9a24d", direction = "column" }) {
  return (
    <div
      className={`flex ${direction === "row" ? "flex-row" : "flex-col"} items-center justify-between ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="block rounded-full border-2"
          style={{ width: 10, height: 10, borderColor: color, opacity: 0.85 }}
        />
      ))}
    </div>
  );
}
