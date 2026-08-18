// ============================================================================
// Shared UI components
// ============================================================================

export function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function SectionLabel({ children }) {
  return <p className="eyebrow">{children}</p>;
}
