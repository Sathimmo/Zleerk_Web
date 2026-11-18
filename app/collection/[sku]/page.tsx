import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ColorChip from "@/components/ColorChip";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { allProducts, findProduct, priceNote, store } from "@/data/store";
import { formatPrice, telHref } from "@/lib/format";

type Props = PageProps<"/collection/[sku]">;

// One static HTML page per SKU; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allProducts.map((product) => ({ sku: product.sku }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sku } = await params;
  const match = findProduct(sku);
  if (!match) return {};

  const { product, category } = match;
  const description = `${product.name} (${product.sku}) — ${product.material}, in ${product.colors.join(", ")}. Sizes ${product.sizes}. ${formatPrice(product.price)} at ${store.name}.`;
  const url = `/collection/${product.sku}/`;

  return {
    title: product.name,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | ${store.name}`,
      description,
      url,
    },
    category: category.name,
  };
}

export default async function ProductPage({ params }: Props) {
  const { sku } = await params;
  const match = findProduct(sku);
  if (!match) notFound();

  const { product, category } = match;
  const related = category.products
    .filter((item) => item.sku !== product.sku)
    .slice(0, 3);

  const labelClass = "eyebrow text-grey";

  return (
    <>
      <div className="container-page py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-grey">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/collection" className="link-underline">
                Collection
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/collection#${category.slug}`}
                className="link-underline"
              >
                {category.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-charcoal">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in">
            <ProductImage
              product={product}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>

          <div className="animate-fade-up">
            <p className="eyebrow text-gold-dark">{category.name}</p>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-sm tracking-[0.15em] text-grey">
              SKU {product.sku}
            </p>

            <p className="mt-6 text-3xl font-semibold text-gold">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1 text-xs text-grey">{priceNote}</p>

            <dl className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className={labelClass}>Material</dt>
                <dd className="col-span-2 text-sm text-charcoal">
                  {product.material}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className={labelClass}>Colors</dt>
                <dd className="col-span-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {product.colors.map((color) => (
                      <li key={color}>
                        <ColorChip color={color} />
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className={labelClass}>Sizes</dt>
                <dd className="col-span-2 text-sm text-charcoal">
                  {product.sizes}
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <dt className={labelClass}>Category</dt>
                <dd className="col-span-2 text-sm text-charcoal">
                  {category.name}
                </dd>
              </div>
            </dl>

            <aside className="mt-8 border-l-2 border-gold bg-cream p-6">
              <h2 className="font-serif text-xl text-charcoal">
                Visit the store to try it on
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                Our team will help you find the right size and fit. Call ahead
                and we will have it ready for you:
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                {store.contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="link-underline font-semibold text-charcoal"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-grey">{store.contact.hours}</p>
              <Link href="/contact" className="btn-dark mt-5">
                Store Details
              </Link>
            </aside>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t border-charcoal/10 bg-cream/50 py-16"
        >
          <div className="container-page">
            <h2
              id="related-heading"
              className="font-serif text-2xl text-charcoal sm:text-3xl"
            >
              More {category.name}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.sku}>
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
