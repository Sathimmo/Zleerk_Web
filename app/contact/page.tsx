import type { Metadata } from "next";
import { SocialLinks } from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { store } from "@/data/store";
import { telHref } from "@/lib/format";

const description = `Visit ${store.name} in Phnom Penh. ${store.contact.address}. Open ${store.contact.hours}.`;

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: `Contact | ${store.name}`,
    description,
    url: "/contact/",
  },
};

export default function ContactPage() {
  const { contact } = store;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  const headingClass = "eyebrow mb-3 text-gold-dark";

  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page animate-fade-up">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Visit the Store"
            description="Come in to see the collection, try pieces on and get friendly fitting advice."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className={headingClass}>Address</h2>
              <address className="text-lg leading-relaxed text-charcoal not-italic">
                {contact.address}
              </address>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-3 inline-block text-sm text-charcoal"
              >
                Open in Google Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div>
              <h2 className={headingClass}>Phone</h2>
              <ul className="space-y-1">
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="link-underline text-lg text-charcoal"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={headingClass}>Opening Hours</h2>
              <p className="text-lg text-charcoal">{contact.hours}</p>
            </div>

            <div>
              <h2 className={headingClass}>Follow Us</h2>
              <SocialLinks className="text-charcoal" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="h-[420px] border border-charcoal/10 bg-cream lg:h-full lg:min-h-[480px]">
              <iframe
                src={mapSrc}
                title={`Map showing the ${store.name} store location`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
