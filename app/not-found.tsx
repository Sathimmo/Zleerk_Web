import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function NotFound() {
  return (
    <section className="py-28">
      <div className="container-page text-center">
        <SectionHeading
          as="h1"
          eyebrow="404"
          title="Page not found"
          description="The page you are looking for does not exist or has moved."
        />
        <Link href="/collection" className="btn-dark mt-10">
          Browse the Collection
        </Link>
      </div>
    </section>
  );
}
