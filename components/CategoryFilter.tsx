"use client";

import { useRef, useState, type ReactNode } from "react";

export type FilterSection = {
  slug: string;
  name: string;
  /** Server-rendered section content (heading + product grid). */
  content: ReactNode;
};

const ALL = "all";

/**
 * Sticky category tabs. Sections are rendered on the server and passed in;
 * this component only toggles which ones are visible.
 */
export default function CategoryFilter({
  sections,
}: {
  sections: FilterSection[];
}) {
  const [active, setActive] = useState<string>(ALL);
  const listRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { slug: ALL, name: "All" },
    ...sections.map(({ slug, name }) => ({ slug, name })),
  ];

  function select(slug: string) {
    setActive(slug);
    // If the reader has scrolled past the top of the list, bring it back.
    const list = listRef.current;
    if (list && list.getBoundingClientRect().top < 0) {
      list.scrollIntoView({ block: "start" });
    }
  }

  return (
    <>
      <div className="sticky top-16 z-30 border-b border-charcoal/10 bg-white/95 backdrop-blur">
        <div
          role="group"
          aria-label="Filter by category"
          className="container-page flex gap-2 overflow-x-auto py-3"
        >
          {tabs.map((tab) => {
            const selected = active === tab.slug;
            return (
              <button
                key={tab.slug}
                type="button"
                aria-pressed={selected}
                onClick={() => select(tab.slug)}
                className={`shrink-0 border px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${
                  selected
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-charcoal/20 text-charcoal hover:border-gold hover:text-gold-dark"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      <div ref={listRef} className="container-page scroll-mt-32">
        {sections.map((section) => (
          <section
            key={section.slug}
            id={section.slug}
            aria-labelledby={`${section.slug}-heading`}
            hidden={active !== ALL && active !== section.slug}
            className="scroll-mt-36 border-b border-charcoal/10 py-14 last:border-0"
          >
            {section.content}
          </section>
        ))}
      </div>
    </>
  );
}
