import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Product } from "@/data/store";

/** "Classic Two-Piece Business Suit" → "CT" */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Shows public/images/<sku>.jpg when that file exists (checked at build time),
 * otherwise a cream placeholder with the product's initials.
 */
export default function ProductImage({
  product,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  product: Product;
  sizes?: string;
  priority?: boolean;
}) {
  const file = `${product.sku}.jpg`;
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "images", file),
  );

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-cream">
      {hasPhoto ? (
        <Image
          src={`/images/${file}`}
          alt={product.name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          role="img"
          aria-label={`${product.name} — photo coming soon`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          <span
            aria-hidden="true"
            className="font-serif text-6xl tracking-widest text-gold transition-transform duration-500 group-hover:scale-110"
          >
            {initials(product.name)}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
        </div>
      )}
    </div>
  );
}
