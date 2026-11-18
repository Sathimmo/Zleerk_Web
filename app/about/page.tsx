import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { categories, store } from "@/data/store";

const description =
  "The story behind Z'Leerk: sharp tailoring, refined footwear and outerwear, curated so you can build a complete look in one visit.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about/" },
  openGraph: { title: `About | ${store.name}`, description, url: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white sm:py-28">
        <div className="container-page animate-fade-up">
          <SectionHeading
            as="h1"
            tone="dark"
            eyebrow="Our Story"
            title="Dressed well, from suit to shoe."
            description={store.tagline}
          />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-charcoal/85">
            <p>
              <span className="float-left mt-1 mr-3 font-serif text-6xl leading-[0.8] text-gold">
                Z
              </span>
              &apos;Leerk began with a simple idea: a man should be able to walk
              into one store and leave with a complete look. So we brought sharp
              tailoring, everyday trousers, refined footwear, modern sneakers
              and outerwear together under one roof, in a single collection
              where every piece is meant to work with the others.
            </p>
            <p>
              Nothing reaches our rails by accident. Each suit, shoe and jacket
              is chosen for three things: how it fits, what it is made of, and
              whether it will still look right years from now. That is why you
              will find wool and linen, full-grain leather and suede, in colours
              that are easy to wear and easy to combine.
            </p>
            <p>
              The best way to choose is to try things on. Our team in Phnom Penh
              is glad to help with sizing and fit, whether you are dressing for
              a wedding, the office or the weekend. Come in, take your time, and
              build your look from suit to shoe in a single visit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page text-center">
          <p className="eyebrow text-gold-dark">{store.season}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 font-serif text-2xl text-charcoal">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/collection#${category.slug}`}
                  className="link-underline"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/collection" className="btn-dark">
              View the Collection
            </Link>
            <Link
              href="/contact"
              className="btn border border-charcoal text-charcoal hover:border-gold hover:bg-gold"
            >
              Visit the Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
