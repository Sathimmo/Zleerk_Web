import Link from "next/link";
import ColorChip from "@/components/ColorChip";
import ProductImage from "@/components/ProductImage";
import type { Product } from "@/data/store";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full flex-col border border-charcoal/10 bg-white transition-all duration-300 hover:border-gold hover:shadow-lg">
      <ProductImage product={product} />

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs tracking-[0.15em] text-grey">{product.sku}</p>
        <h3 className="mt-1.5 font-serif text-lg leading-snug text-charcoal">
          {/* The ::after overlay makes the whole card clickable. */}
          <Link
            href={`/collection/${product.sku}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-grey">{product.material}</p>

        <ul aria-label="Colors" className="mt-4 flex flex-wrap gap-1.5">
          {product.colors.map((color) => (
            <li key={color}>
              <ColorChip color={color} />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="text-sm text-grey">
            <span className="sr-only">Sizes: </span>
            <span aria-hidden="true">Sizes </span>
            <span className="font-medium text-charcoal">{product.sizes}</span>
          </p>
          <p className="text-xl font-semibold text-gold">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
