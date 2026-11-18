/** Swatch colours for the colour names used in data/store.ts. */
const swatches: Record<string, string> = {
  Navy: "#1F2A44",
  Charcoal: "#36383B",
  Black: "#111111",
  "Midnight Blue": "#191D3A",
  Ivory: "#F4EFE1",
  "Grey Check": "#8C8F94",
  Brown: "#6B4A32",
  Beige: "#D9C7A8",
  "Light Grey": "#C9CBCE",
  "Sky Blue": "#A9C8E4",
  Khaki: "#B7A57A",
  Olive: "#5F6642",
  Stone: "#CFC8B8",
  Taupe: "#8B7D6B",
  White: "#FFFFFF",
  Sand: "#D8C3A0",
  Grey: "#8E9196",
  "Dark Brown": "#3E2A1E",
  Tan: "#B98654",
  Cognac: "#9A4F27",
  Chocolate: "#3F2718",
  "Off-White": "#F3F0E8",
  Burgundy: "#6D1F2C",
  Forest: "#2C4A36",
  Camel: "#BE9360",
  Indigo: "#2B3A67",
  "Washed Black": "#3B3B3D",
};

const fallback = "#CCCCCC";

/** "White/Black" renders as a half-and-half swatch. */
function swatchBackground(color: string): string {
  const parts = color.split("/").map((part) => swatches[part.trim()] ?? fallback);
  if (parts.length === 1) return parts[0];
  return `linear-gradient(135deg, ${parts[0]} 50%, ${parts[1]} 50%)`;
}

export default function ColorChip({ color }: { color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 bg-white py-1 pr-2.5 pl-1.5 text-xs text-charcoal">
      <span
        aria-hidden="true"
        className="h-3.5 w-3.5 rounded-full border border-charcoal/25"
        style={{ background: swatchBackground(color) }}
      />
      {color}
    </span>
  );
}
