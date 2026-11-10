// Divisor "——✦——" que fecha o logo da Amora, usado entre títulos e texto.
export default function Ornamento({ className = "", cor = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 120 12"
      className={`w-24 h-3 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="6" x2="48" y2="6" stroke={cor} strokeWidth="0.8" />
      <line x1="72" y1="6" x2="120" y2="6" stroke={cor} strokeWidth="0.8" />
      <path d="M60 0.5 C61 4.5 61.5 5 65.5 6 C61.5 7 61 7.5 60 11.5 C59 7.5 58.5 7 54.5 6 C58.5 5 59 4.5 60 0.5Z" fill={cor} />
    </svg>
  );
}
