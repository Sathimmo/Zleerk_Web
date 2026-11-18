import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import { store } from "@/data/store";

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal text-white">
      <div className="container-page relative flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${store.name} home`}
          className="font-serif text-xl tracking-[0.35em] transition-colors hover:text-gold"
        >
          {store.name.toUpperCase()}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative py-2 text-xs font-medium tracking-[0.2em] uppercase text-white/85 transition-colors hover:text-gold"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
