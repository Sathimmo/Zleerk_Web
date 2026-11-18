import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteUrl, store } from "@/data/store";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = `${store.name} | ${store.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${store.name}`,
  },
  description: store.intro,
  openGraph: {
    type: "website",
    siteName: store.name,
    title: defaultTitle,
    description: store.intro,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: store.intro,
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1C1C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-charcoal"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        
        <Footer />
        <script src="http://localhost:3000/widget.js" data-ragstudio-token="oPZ1wQK6-32eu2rcsn4lDANh7ENnHiGh_kJnr8kWj18" async></script>
      </body>
    </html>
  );
}
