import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import { categories, priceNote, store } from "@/data/store";

/** Lays out five cards as 3 + 2 on desktop and 2 + 2 + 1 on tablets. */
function cardSpan(index: number, total: number): string {
  const desktop = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
  const tablet = total % 2 === 1 && index === total - 1 ? "sm:col-span-2" : "";
  return `${tablet} ${desktop}`;
}

export default function HomePage() {
  return (
    <>
      {/* Hero — together with the 4rem header this fills the viewport. */}
      <section className="flex min-h-[calc(100svh-4rem)] items-center bg-charcoal text-white">
        <div className="container-page py-20 text-center">
          <p className="eyebrow animate-fade-in text-white/70">{store.season}</p>
          <h1 className="mt-8 animate-fade-up font-serif text-5xl tracking-[0.25em] sm:text-7xl sm:tracking-[0.3em] lg:text-8xl">
            {/* Trailing letter-spacing is offset so the wordmark stays centred. */}
            <span className="-mr-[0.25em] sm:-mr-[0.3em]">
              {store.name.toUpperCase()}
            </span>
          </h1>
          <span
            aria-hidden="true"
            className="mx-auto mt-8 block h-px w-16 animate-fade-in bg-gold [animation-delay:300ms]"
          />
          <p className="mt-8 animate-fade-up text-sm tracking-[0.3em] text-gold uppercase [animation-delay:200ms] sm:text-base">
            {store.tagline}
          </p>
          <div className="mt-12 animate-fade-up [animation-delay:400ms]">
            <Link href="/collection" className="btn-gold">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="The House" title="One visit. A complete look." />
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-charcoal/80">
            {store.intro}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-28" aria-labelledby="categories-heading">
        <div className="container-page">
          <div id="categories-heading">
            <SectionHeading eyebrow={store.season} title="Shop by Category" />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.slug}
                category={category}
                className={cardSpan(index, categories.length)}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-grey">{priceNote}</p>
        </div>
      </section>

      {/* Why shop with us */}
      <section className="bg-charcoal py-20 text-white sm:py-28">
        <div className="container-page">
          <SectionHeading
            tone="dark"
            eyebrow="Our Promise"
            title="Why Shop With Us"
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {store.whyUs.map((reason, index) => (
              <li key={reason} className="border-t border-gold/50 pt-6">
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl text-gold"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 leading-relaxed text-white/85">{reason}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Visit the store */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-page text-center">
          <SectionHeading
            eyebrow="Visit the Store"
            title="Try it on. Get the fit right."
          />
          <address className="mx-auto mt-8 max-w-xl leading-relaxed text-charcoal/80 not-italic">
            {store.contact.address}
          </address>
          <p className="mt-2 text-sm text-grey">{store.contact.hours}</p>
          <div className="mt-10">
            <Link href="/contact" className="btn-dark">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
