import Link from "next/link";
import { navLinks } from "@/components/Header";
import { store } from "@/data/store";
import { telHref } from "@/lib/format";

const socialLabels: Record<keyof typeof store.contact.social, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  telegram: "Telegram",
};

export function SocialLinks({ className = "" }: { className?: string }) {
  const entries = Object.entries(store.contact.social) as [
    keyof typeof store.contact.social,
    string,
  ][];

  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {entries.map(([key, href]) => (
        <li key={key}>
          <a
            href={href}
            aria-label={`${store.name} on ${socialLabels[key]}`}
            className="text-xs font-medium tracking-[0.2em] uppercase underline decoration-gold/60 decoration-1 underline-offset-4 transition-colors hover:text-gold"
          >
            {socialLabels[key]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const { contact } = store;
  const headingClass = "eyebrow mb-4 text-gold";

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            aria-label={`${store.name} home`}
            className="font-serif text-2xl tracking-[0.35em] transition-colors hover:text-gold"
          >
            {store.name.toUpperCase()}
          </Link>
          <p className="mt-4 text-sm text-gold">{store.tagline}</p>
          <p className="mt-1 text-sm text-white/70">{store.season}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className={headingClass}>Explore</h2>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Visit</h2>
          <address className="text-sm leading-relaxed text-white/80 not-italic">
            {contact.address}
          </address>
          <p className="mt-3 text-sm text-white/80">{contact.hours}</p>
        </div>

        <div>
          <h2 className={headingClass}>Contact</h2>
          <ul className="space-y-2 text-sm text-white/80">
            {contact.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={telHref(phone)}
                  className="transition-colors hover:text-gold"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-5 text-white/80" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-white/60">
          © {new Date().getFullYear()} {store.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
