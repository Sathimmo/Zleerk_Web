type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
  /** "dark" = light text for charcoal backgrounds */
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  description,
  tone = "light",
  align = "center",
  as: Tag = "h2",
  className = "",
}: Props) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${dark ? "text-gold" : "text-gold-dark"}`}>
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-serif text-3xl leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </Tag>
      <span
        aria-hidden="true"
        className={`mt-6 block h-px w-12 bg-gold ${centered ? "mx-auto" : ""}`}
      />
      {description && (
        <p
          className={`mt-6 leading-relaxed ${
            dark ? "text-white/75" : "text-grey"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
