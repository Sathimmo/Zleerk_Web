import type { Metadata } from "next";
import CategoryFilter, {
  type FilterSection,
} from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { categories, priceNote, store } from "@/data/store";

const description =
  "Browse the full Z'Leerk collection: tailored suits, trousers, leather shoes, sneakers and jackets.";

export const metadata: Metadata = {
  title: "Collection",
  description,
  alternates: { canonical: "/collection/" },
  openGraph: {
    title: `Collection | ${store.name}`,
    description,
    url: "/collection/",
  },
};

export default function CollectionPage() {
  const sections: FilterSection[] = categories.map((category) => ({
    slug: category.slug,
    name: category.name,
    content: (
      <>
        <div className="mb-8 max-w-2xl">
          <h2
            id={`${category.slug}-heading`}
            className="font-serif text-3xl text-charcoal"
          >
            {category.name}
          </h2>
          <p className="mt-2 text-grey">{category.desc}</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {category.products.map((product) => (
            <li key={product.sku}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </>
    ),
  }));

  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page animate-fade-up">
          <SectionHeading
            as="h1"
            eyebrow={store.season}
            title="The Collection"
            description={store.tagline}
          />
        </div>
      </section>

      <CategoryFilter sections={sections} />

      <p className="container-page pb-16 text-center text-xs text-grey">
        {priceNote}
      </p>
    </>
  );
}
