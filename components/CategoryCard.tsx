import Link from "next/link";
import { startingPrice, type Category } from "@/data/store";
import { formatPrice } from "@/lib/format";

export default function CategoryCard({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={`/collection#${category.slug}`}
      className={`group flex flex-col border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg ${className}`}
    >
      <p className="eyebrow text-gold-dark">
        {category.products.length} styles
      </p>
      <h3 className="mt-3 font-serif text-2xl text-charcoal">
        {category.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
        {category.desc}
      </p>
      <div className="mt-8 flex items-end justify-between border-t border-charcoal/10 pt-5">
        <p className="text-sm text-grey">
          From{" "}
          <span className="text-lg font-semibold text-gold-dark">
            {formatPrice(startingPrice(category))}
          </span>
        </p>
        <span
          aria-hidden="true"
          className="text-gold-dark transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}
